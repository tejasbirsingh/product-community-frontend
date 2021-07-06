import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnswerPayload } from './answer.payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private httpClient: HttpClient) { }

  getAllAnswersForPost(postId: number): Observable<AnswerPayload[]> {
    return this.httpClient.get<AnswerPayload[]>('http://localhost:8080/api/answers/by-post/' + postId);
  }

  postAnswer(answerPayload: AnswerPayload): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/api/answers/', answerPayload);
  }

  getAllAnswersByUser(name: string) {
    return this.httpClient.get<AnswerPayload[]>('http://localhost:8080/api/answers/by-user/' + name);
  }
  getAnswer(answerId: number) {
    return this.httpClient.get<AnswerPayload>('http://localhost:8080/api/answers/' + answerId);
  }
  acceptAnswer(answerId: number) {
    return this.httpClient.get<any>('http://localhost:8080/api/answers/accept/' + answerId);
  }
  

}
