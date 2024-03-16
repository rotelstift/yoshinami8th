import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService, Article } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  article_form = new FormGroup({
    title: new FormControl<string>(''),
    body_text: new FormControl<string>('')
  })
  selected_image: File | null = null

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.entity_status = this.route.snapshot.paramMap.get('entityStatus')
    if (this.entity_status && /^\d+$/.test(this.entity_status)) {
      this.articleService.getArticleData(this.entity_status).subscribe({
        next: (response) => {
          this.article_data = response
          for (const key in this.article_form.value) {
            console.log(`${key}: ${this.article_data[key as keyof Article]}`)
            this.article_form.get(key)?.setValue(this.article_data[key as keyof Article])
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

    this.articleService.postArticleFormData(form_data).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => {
        this.router.navigate(['/'])
      }
    })
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
}
