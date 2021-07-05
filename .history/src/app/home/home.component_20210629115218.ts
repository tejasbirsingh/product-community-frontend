import { Component, OnInit } from '@angular/core';
import { faClosedCaptioning, faDoorClosed, faQuestion, faUsers, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/shared/auth.service';
import { PostModel } from '../shared/post-model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
faUsers = faUsers;
faQues = faQuestion;
  posts: Array<PostModel> = [];
  numClosedQues : number;
  numOpenQues:number;
  totalQues :number;
  totalUsers:number;

  constructor(private postService: PostService, private authService :AuthService) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
      this.totalQues = post.length;
      this.postService.getNumberClosedQues().subscribe(num =>{
        this.numClosedQues = num;
        this.numOpenQues = this.totalQues - num; 
      })
    });
    this.authService.getTotalUsers().subscribe(users=>{
      this.totalUsers = users;
    });
  
  
  } 

  ngOnInit(): void {
  }

}
