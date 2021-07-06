import { Component, OnInit, Input } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { CommentVotePayload } from './comment-vote-payload';
import { VoteType } from './vote-type';
import { VoteService } from '../vote.service';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CommentPayload } from 'src/app/comment/comment.payload';
import { CommentService } from 'src/app/comment/comment.service';

@Component({
  selector: 'app-comment-vote-button' ,
  templateUrl: './comment-vote-button.component.html',
  styleUrls: ['./comment-vote-button.component.css']
})
export class CommentVoteButtonComponent implements OnInit {

  @Input() comment: CommentPayload;
  votePayload: CommentVotePayload;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  upvoteColor: string;
  downvoteColor: string;
  isLoggedIn: boolean;

  constructor(private voteService: VoteService,
    private authService: AuthService,
    private commentService: CommentService, private toastr: ToastrService) {

    this.votePayload = {
      voteType: undefined,
      commentId: undefined
    }
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
  }

  ngOnInit(): void {
    this.updateVoteDetails();
  }

  upvoteComment() {
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
    this.downvoteColor = '';
  }

  downvoteComment() {
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
    this.upvoteColor = '';
  }

  private vote() {
    this.votePayload.commentId = this.comment.id;
    this.voteService.commentVote(this.votePayload).subscribe(() => {
      this.updateVoteDetails();
    }, error => {
      this.toastr.error("You can't vote twice!");
      throwError(error);
    });
  }

  private updateVoteDetails() {
    this.commentService.getComment(this.comment.id).subscribe(comment => {
      this.comment = comment;
    });
  }
}
