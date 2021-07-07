import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerPayload } from 'src/app/answer/answer.payload';
import { AnswerService } from 'src/app/answer/answer.service';

import { QuestionModel } from 'src/app/shared/question-model';
import { QuestionService } from 'src/app/shared/question.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  name: string;
  questions: QuestionModel[];
  answers: AnswerPayload[];
  postLength: number;
  answerLength: number;
  isLoading = false;

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService,
    private answerService: AnswerService) {
    this.name = this.activatedRoute.snapshot.params.name;
    this.isLoading = true;

    this.questionService.getAllQuestionsByUser(this.name).subscribe(data => {
      this.questions = data;
      this.postLength = data.length;
    });
    this.answerService.getAllAnswersByUser(this.name).subscribe(data => {
      this.answers = data;
      this.answerLength = data.length;
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
  }

}
