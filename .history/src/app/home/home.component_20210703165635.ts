import { Component, OnInit } from '@angular/core';
import { faClosedCaptioning, faDoorClosed, faQuestion, faUsers, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/shared/auth.service';
import { QuestionModel } from '../shared/question-model';
import { QuestionService } from '../shared/question.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
faUsers = faUsers;
faQues = faQuestion;
  posts: Array<QuestionModel> = [];
  numClosedQues : number;
  numOpenQues:number;
  totalQues :number;
  totalUsers:number;

  constructor(private questionService: QuestionService, private authService :AuthService) {
    this.questionService.getAllQuestions().subscribe(post => {
      this.posts = post;
      this.totalQues = post.length;
      this.questionService.getNumberClosedQues().subscribe(num =>{
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
