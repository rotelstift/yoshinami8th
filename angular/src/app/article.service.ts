import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  postArticleFormData(form_data: FormData) {
    return this.http.post(
      'http://0.0.0.0:3050/api/articles',
      form_data
    )
  }

  updateArticleData(id: string, form_data: FormData) {
    return this.http.put(
      `http://0.0.0.0:3050/api/articles/${id}`,
      form_data
    )
  }

  getAllArticleData(): Observable<Article[]> {
    return this.http.get<Article[]>(
      'http://0.0.0.0:3050/api/articles'
    )
  }

  getArticleData(id: string): Observable<Article> {
    return this.http.get<Article>(
      `http://0.0.0.0:3050/api/articles/${id}`
    )
  }
}

export interface Article {
  id: number,
  title: string,
  taggings: Array<{tag_id: number}>,
  body_text: string,
  image_url: string,
  created_at: string,
  updated_at: string
}
