import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/shared/question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionModel } from 'src/app/shared/question-model';
import { throwError } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnswerPayload } from 'src/app/answer/answer.payload';
import { AnswerService } from 'src/app/answer/answer.service';
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
  answerForm: FormGroup;
  answerPayload: AnswerPayload;
  answers: AnswerPayload[];

  constructor(private questionService: QuestionService, private activateRoute: ActivatedRoute,
    private answerService: AnswerService, private router: Router, private authService : AuthService) {
    this.questionId = this.activateRoute.snapshot.params.id;

    this.answerForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    this.answerPayload = {
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
    this.getAnswersForQuestion();
   this.userName =  this.authService.getUserName();

  }

  questionAnswer() {
    this.answerPayload.text = this.answerForm.get('text').value;
    this.answerService.postAnswer(this.answerPayload).subscribe(data => {
      this.answerForm.get('text').setValue('');
      this.getAnswersForQuestion();
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


  private getAnswersForQuestion() {
    this.answerService.getAllAnswersForQuestion(this.questionId).subscribe(data => {
      this.answers = data;
    }, error => {
      throwError(error);
    });
  }

  closeQuestion(answerId: number) {
    console.log(answerId);

    this.questionService.closeQuestion(this.questionId,answerId).subscribe((data) => {
      this.answerService.acceptAnswer(answerId).subscribe((data) => {
        this.getAnswersForQuestion();
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
