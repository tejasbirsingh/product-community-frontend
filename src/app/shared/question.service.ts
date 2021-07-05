import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionModel } from './question-model';
import { Observable } from 'rxjs';
import { CreateQuestionPayload } from '../question/create-question/create-question.payload';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  
  BACKEND_URL = "http://localhost:8080/api/questions/";
  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<Array<QuestionModel>> {
    return this.http.get<Array<QuestionModel>>(this.BACKEND_URL);
  }

  createQuestion(questionPayload: CreateQuestionPayload): Observable<any> {
    return this.http.post(this.BACKEND_URL, questionPayload);
  }

  getQuestion(id: number): Observable<QuestionModel> {
    return this.http.get<QuestionModel>(this.BACKEND_URL + id);
  }

  getAllQuestionsByUser(name: string): Observable<QuestionModel[]> {
    return this.http.get<QuestionModel[]>(this.BACKEND_URL + 'by-user/' + name);
  }

  getAllQuestionsByCategory(id: number): Observable<QuestionModel[]> {
    return this.http.get<QuestionModel[]>(this.BACKEND_URL + 'by-category/' + id);
  }

  getAllQuestionsByCategoryName(name: string): Observable<QuestionModel[]> {
    return this.http.get<QuestionModel[]>(this.BACKEND_URL + 'by-category-name/' + name);
  }
  getAllQuestionsByProductId(id: string): Observable<QuestionModel[]> {
    return this.http.get<QuestionModel[]>(this.BACKEND_URL + 'by-productid/' + id);
  }
  closeQuestion(id: number, answerId: number): Observable<any> {
    return this.http.get<any>(this.BACKEND_URL + 'close/' + id + "/" + answerId);
  }
  getNumberClosedQues(): Observable<number> {
    return this.http.get<number>(this.BACKEND_URL + 'closed');
  }
}
