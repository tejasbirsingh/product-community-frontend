import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/shared/question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionModel } from 'src/app/shared/question-model';
import { throwError } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentPayload } from 'src/app/comment/comment.payload';
import { CommentService } from 'src/app/comment/comment.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/shared/auth.service';


@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {

  questionId: number;
  question: QuestionModel;
  faUser = faUser;
  userName: string;
  commentForm: FormGroup;
  commentPayload: CommentPayload;
  comments: CommentPayload[];

  constructor(private questionService: QuestionService, private activateRoute: ActivatedRoute,
    private commentService: CommentService, private router: Router, private authService : AuthService) {
    this.questionId = this.activateRoute.snapshot.params.id;

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    this.commentPayload = {
      text: '',
      questionId: this.questionId,
      id: 0,
      upVote: undefined,
      downVote: undefined,
      voteCount: 0,
      accepted: false,
    };

  }

  ngOnInit(): void {
    this.getQuestionById();
    this.getCommentsForQuestion();
   this.userName =  this.authService.getUserName();

  }

  questionComment() {
    this.commentPayload.text = this.commentForm.get('text').value;
    this.commentService.postComment(this.commentPayload).subscribe(data => {
      this.commentForm.get('text').setValue('');
      this.getCommentsForQuestion();
    }, error => {
      throwError(error);
    })
  }

  private getQuestionById() {
    this.questionService.getQuestion(this.questionId).subscribe(data => {
      this.question = data;
    }, error => {
      throwError(error);
    });
  }


  private getCommentsForQuestion() {
    this.commentService.getAllCommentsForQuestion(this.questionId).subscribe(data => {
      this.comments = data;
    }, error => {
      throwError(error);
    });
  }

  closeQuestion(commentId: number) {
    console.log(commentId);

    this.questionService.closeQuestion(this.questionId,commentId).subscribe((data) => {
      this.commentService.acceptAnswer(commentId).subscribe((data) => {
        this.getCommentsForQuestion();
      },
        error => {
          throwError(error);
        })
      this.getQuestionById();
    }, error => {
      throwError(error);
    })
  }
}
