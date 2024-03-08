import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
@Injectable({providedIn: 'root'})
export class HelloComponent {
  constructor(private http: HttpClient) {
    this.getAnswer()
  }
  hello_world: Answer | undefined;
  getAnswer() {
    this.http.get<Answer>('http://0.0.0.0:3050/').subscribe(answer =>{
      console.log(answer)
      this.hello_world = answer
    })
  }
}

interface Answer {
  answer: string
}
