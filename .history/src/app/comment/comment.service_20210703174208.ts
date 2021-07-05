import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentPayload } from './comment.payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  BACKEND_URL = "http://localhost:8080/api/comments/";
  constructor(private httpClient: HttpClient) { }

  getAllCommentsForQuestion(postId: number): Observable<CommentPayload[]> {
    return this.httpClient.get<CommentPayload[]>(this.BACKEND_URL + 'by-question/' + postId);
  }

  postComment(commentPayload: CommentPayload): Observable<any> {
    return this.httpClient.post<any>(this.BACKEND_URL, commentPayload);
  }

  getAllCommentsByUser(name: string) {
    return this.httpClient.get<CommentPayload[]>(this.BACKEND_URL + 'by-user/' + name);
  }
  getComment(commentId: number) {
    return this.httpClient.get<CommentPayload>(this.BACKEND_URL + commentId);
  }
  acceptAnswer(commentId: number) {
    return this.httpClient.get<any>(this.BACKEND_URL + 'accept/' + commentId);
  }
  

}
