import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnswerPayload } from './answer.payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  BACKEND_URL = "http://localhost:8080/api/answers/";
  constructor(private httpClient: HttpClient) { }

  getAllAnswersForQuestion(postId: number): Observable<AnswerPayload[]> {
    return this.httpClient.get<AnswerPayload[]>(this.BACKEND_URL + 'by-question/' + postId);
  }

  postAnswer(answerPayload: AnswerPayload): Observable<any> {
    return this.httpClient.post<any>(this.BACKEND_URL, answerPayload);
  }

  getAllAnswersByUser(name: string) {
    return this.httpClient.get<AnswerPayload[]>(this.BACKEND_URL + 'by-user/' + name);
  }
  getAnswer(answerId: number) {
    return this.httpClient.get<AnswerPayload>(this.BACKEND_URL + answerId);
  }
  acceptAnswer(answerId: number) {
    return this.httpClient.get<any>(this.BACKEND_URL + 'accept/' + answerId);
  }
  

}
