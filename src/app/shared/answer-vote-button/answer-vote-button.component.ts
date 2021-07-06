import { Component, OnInit, Input } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { AnswerVotePayload } from './answer-vote-payload';
import { VoteType } from './vote-type';
import { VoteService } from '../vote.service';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AnswerPayload } from 'src/app/answer/answer.payload';
import { AnswerService } from 'src/app/answer/answer.service';

@Component({
  selector: 'app-answer-vote-button' ,
  templateUrl: './answer-vote-button.component.html',
  styleUrls: ['./answer-vote-button.component.css']
})
export class AnswerVoteButtonComponent implements OnInit {

  @Input() answer: AnswerPayload;
  votePayload: AnswerVotePayload;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  upvoteColor: string;
  downvoteColor: string;
  isLoggedIn: boolean;

  constructor(private voteService: VoteService,
    private authService: AuthService,
    private answerService: AnswerService, private toastr: ToastrService) {

    this.votePayload = {
      voteType: undefined,
      answerId: undefined
    }
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
  }

  ngOnInit(): void {
    this.updateVoteDetails();
  }

  upvoteAnswer() {
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
    this.downvoteColor = '';
  }

  downvoteAnswer() {
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
    this.upvoteColor = '';
  }

  private vote() {
    this.votePayload.answerId = this.answer.id;
    this.voteService.answerVote(this.votePayload).subscribe(() => {
      this.updateVoteDetails();
    }, error => {
      this.toastr.error("You can't vote twice!");
      throwError(error);
    });
  }

  private updateVoteDetails() {
    this.answerService.getAnswer(this.answer.id).subscribe(answer => {
      this.answer = answer;
    });
  }
}
