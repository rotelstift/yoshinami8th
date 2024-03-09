import { Component } from '@angular/core';
import { ArticleService } from '../article.service'; 

@Component({
  selector: 'app-article-editor',
  standalone: true,
  imports: [],
  templateUrl: './article-editor.component.html',
  styleUrl: './article-editor.component.css'
})
export class ArticleEditorComponent {
  constructor(private articleService: ArticleService) {}

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
}
