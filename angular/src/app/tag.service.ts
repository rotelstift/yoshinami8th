import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(
      'http://0.0.0.0:3050/tags'
    )
  }

  postTag(form_data: FormData) {
    return this.http.post(
      'http://0.0.0.0:3050/tags',
      form_data
    )
  }
}

export interface Tag {
  id: number,
  name: string,
  slug: string
}
