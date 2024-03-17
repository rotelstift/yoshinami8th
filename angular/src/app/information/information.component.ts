import { Component } from '@angular/core';
import { ArticleReaderComponent } from '../article-reader/article-reader.component';
import { ArticleService, Article } from '../article.service';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [
    CommonModule,
    ArticleReaderComponent,
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  information: Article[] | null = null

  constructor(
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    lastValueFrom(this.articleService.getListedArticleData('information'))
      .then(response => {
        this.information = response
        console.log(this.information)
      })
  }

}
