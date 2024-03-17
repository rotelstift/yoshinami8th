import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService, Article } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Tag, TagService } from '../tag.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-article-editor',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './article-editor.component.html',
  styleUrl: './article-editor.component.css'
})
export class ArticleEditorComponent {
  entity_status: string | null = null
  image_name: string | undefined
  image_src: string | ArrayBuffer | null = ''

  article_data: Article | null = null
  tags: Tag[] = []

  article_form = new FormGroup({
    title: new FormControl<string>(''),
    body_text: new FormControl<string>('')
  })
  selected_image: File | null = null

  constructor(
    private articleService: ArticleService,
    private tagService: TagService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.entity_status = this.route.snapshot.paramMap.get('entityStatus')
    lastValueFrom(this.tagService.getAllTags()).then(response => {
      this.tags = response
    })
    if (this.entity_status && /^\d+$/.test(this.entity_status)) {
      this.articleService.getArticleData(this.entity_status).subscribe({
        next: (response) => {
          this.article_data = response
          for (const key in this.article_form.value) {
            console.log(`${key}: ${this.article_data[key as keyof Article]}`)
            this.article_form.get(key)?.setValue(this.article_data[key as keyof Article])
          }
          if (this.article_data['image_url']) {
            this.image_src = this.article_data['image_url']
          }
        },
        error: (error) => console.error(error),
        complete: () => {
          console.log('complete')
        }
      })
    } else if (this.entity_status == 'new') {
      console.log('new article')
    } else {
      this.router.navigate(['/'])
    }
  }

  onSubmit(event: Event) {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const form_data = new FormData(form)

    for (const key in this.article_form.value) {
      form_data.append(`article[${key}]`, this.article_form.get(key)?.value)
    }

    if (form_data.get('article[tag_ids][]') === null) {
      form_data.append('article[tag_ids][]', '')
    }

    if (this.entity_status && /^\d+$/.test(this.entity_status)) {
      this.articleService.updateArticleData(this.entity_status, form_data).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => {
        this.router.navigate(['/'])
      }
      })
    } else if (this.entity_status == 'new') {
      this.articleService.postArticleFormData(form_data).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => {
          this.router.navigate(['/'])
        }
      })
    }
  }

  selectImage(input: HTMLInputElement): void {
    input.click()
  }

  onImageSelected(event: Event): void {
    const image = event.currentTarget as HTMLInputElement
    if (image.files) {
      const reader = new FileReader()
      reader.onload = _e => this.image_src = reader.result
      reader.readAsDataURL(image.files[0])
      this.image_name = image.files[0].name
    }
  }

  tagChecked(id: number): boolean {
    if (!this.article_data) {
      return false
    }
    return this.article_data['taggings'].some(value => value.tag_id === id)
  }

  tagFormId(slug: string) {
    return `tag_${slug}`
  }
}
