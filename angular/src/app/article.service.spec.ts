import { fakeAsync } from '@angular/core/testing';
import { Article, ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ArticleEditorService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let articleService: ArticleService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    articleService = new ArticleService(httpClientSpy);
  });

  it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {
    const expectedArticles: Article[] = [
      {
        id: 1,
        title: 'A',
        image_url: 'http://example.com/image/a.jpg',
        body_text: 'Hello world!',
        taggings: [
          {tag_id: 1},
          {tag_id: 2}
        ],
        created_at: '2024-01-01',
        updated_at: '2024-01-31'
      },
      {
        id: 2,
        title: 'B',
        image_url: 'http://example.com/image/b.jpg',
        body_text: 'Hello world!',
        taggings: [
          {tag_id: 1},
          {tag_id: 3}
        ],
        created_at: '2024-01-01',
        updated_at: '2024-01-31'
      }
    ]
    
    httpClientSpy.get.and.returnValue(of(expectedArticles));

    articleService.getAllArticleData().subscribe({
      next: (articles) => {
        expect(articles).withContext('expected articles').toEqual(expectedArticles);
        done();
      },

      error: done.fail
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});
