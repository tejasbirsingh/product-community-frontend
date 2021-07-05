import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/comment/comment.service';
import { CommentPayload } from 'src/app/comment/comment.payload';
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
  comments: CommentPayload[];
  postLength: number;
  commentLength: number;

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService,
    private commentService: CommentService) {
    this.name = this.activatedRoute.snapshot.params.name;

    this.questionService.getAllQuestionsByUser(this.name).subscribe(data => {
      this.questions = data;
      this.postLength = data.length;
    });
    this.commentService.getAllCommentsByUser(this.name).subscribe(data => {
      this.comments = data;
      this.commentLength = data.length;
    });
  }

  ngOnInit(): void {
  }

}
