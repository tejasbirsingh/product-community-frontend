import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VotePayload } from './vote-button/vote-payload';
import { Observable } from 'rxjs';
import { CommentVotePayload } from './comment-vote-button/comment-vote-payload';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }

  vote(votePayload: VotePayload): Observable<any> {
    return this.http.post('http://localhost:8080/api/votes/', votePayload);
  }

  commentVote(votePayload: CommentVotePayload): Observable<any> {
    return this.http.post('http://localhost:8080/api/comment-votes/', votePayload);
  }

}
