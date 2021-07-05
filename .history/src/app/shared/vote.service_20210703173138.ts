import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VotePayload } from './vote-button/vote-payload';
import { Observable } from 'rxjs';
import { CommentVotePayload } from './comment-vote-button/comment-vote-payload';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  BACKEND_URL = "http://localhost:8080/api/";
  constructor(private http: HttpClient) { }

  vote(votePayload: VotePayload): Observable<any> {
    return this.http.post(this.BACKEND_URL + 'votes/', votePayload);
  }

  commentVote(votePayload: CommentVotePayload): Observable<any> {
    return this.http.post(this.BACKEND_URL + 'comment-votes/', votePayload);
  }

}
