import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from 'src/app/answer/answer.service';
import { PostModel } from 'src/app/shared/post-model';
import { AnswerPayload } from 'src/app/answer/answer.payload';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  name: string;
  posts: PostModel[];
  answers: AnswerPayload[];
  postLength: number;
  answerLength: number;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService,
    private answerService: AnswerService) {
    this.name = this.activatedRoute.snapshot.params.name;

    this.postService.getAllPostsByUser(this.name).subscribe(data => {
      this.posts = data;
      this.postLength = data.length;
    });
    this.answerService.getAllAnswersByUser(this.name).subscribe(data => {
      this.answers = data;
      this.answerLength = data.length;
    });
  }

  ngOnInit(): void {
  }

}
