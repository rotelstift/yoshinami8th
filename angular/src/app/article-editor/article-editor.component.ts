import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-editor.component.html',
  styleUrl: './article-editor.component.css'
})
export class ArticleEditorComponent {
  image_name: string | undefined
  image_src: string | ArrayBuffer | null = ''

  constructor(
    private articleService: ArticleService
  ) {}

  submitArticle(event: Event) {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const form_data = new FormData(form)

    this.articleService.postArticleFormData(form_data).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => console.info('complete')
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
