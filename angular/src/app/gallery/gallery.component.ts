import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LazyLoadImageDirective } from '../lazy-load-image.directive';
import { ArticleService, Article } from '../article.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, LazyLoadImageDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  articles: Article[] = []

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getListedArticleData('gallery').subscribe({
      next: (response) => {
        console.log(response)
        this.articles = response
      },
      error: (error) => console.error(error),
      complete: () => console.log('complete')
    })
  }
}
