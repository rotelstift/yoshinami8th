import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  postArticleFormData(formData: FormData) {
    return this.http.post('http://0.0.0.0:3050/articles', formData)
  }
}
