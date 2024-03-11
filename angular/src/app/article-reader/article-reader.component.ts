import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService, Article } from '../article.service';
import { LazyLoadImageDirective } from '../lazy-load-image.directive';

@Component({
  selector: 'app-article-reader',
  standalone: true,
  imports: [CommonModule, LazyLoadImageDirective],
  templateUrl: './article-reader.component.html',
  styleUrl: './article-reader.component.css'
})
export class ArticleReaderComponent {
  articles: Article[] = []

  constructor(
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.articleService.getAllArticleData().subscribe({
      next: (response) => {
        console.log(response)
        this.articles = response
      },
      error: (error) => console.error(error),
      complete: () => console.log('complete')
    })
  }

  rewriteDateString(string: string): string {
    return new Date(Date.parse(string)).toLocaleDateString('ja-JP', {year: 'numeric', month: '2-digit', day: '2-digit'})
  }
}
