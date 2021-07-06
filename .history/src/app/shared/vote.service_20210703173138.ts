import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VotePayload } from './vote-button/vote-payload';
import { Observable } from 'rxjs';
import { AnswerVotePayload } from './answer-vote-button/answer-vote-payload';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  BACKEND_URL = "http://localhost:8080/api/";
  constructor(private http: HttpClient) { }

  vote(votePayload: VotePayload): Observable<any> {
    return this.http.post(this.BACKEND_URL + 'votes/', votePayload);
  }

  answerVote(votePayload: AnswerVotePayload): Observable<any> {
    return this.http.post(this.BACKEND_URL + 'answer-votes/', votePayload);
  }

}
