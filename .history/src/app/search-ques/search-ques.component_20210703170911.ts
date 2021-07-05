import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { throwError } from 'rxjs';

import { QuestionService } from '../shared/question.service';

@Component({
  selector: 'app-search-ques',
  templateUrl: './search-ques.component.html',
  styleUrls: ['./search-ques.component.css']
})
export class SearchQuesComponent implements OnInit {
  selectedCriteria: string = "category";
  posts : PostModel[];
  constructor(private questionService :QuestionService) { }

  ngOnInit(): void {
 
  }

 
  

  search(form : NgForm){
    if(form.invalid){
        return;
    }
    this.posts = [];
    
    switch(form.value.criteria) { 
      case 1: { 
        this.questionService.getAllPostsByUser(form.value.searchtext).subscribe((posts)=>{
          this.posts = posts;
        },
        (error)=>{
          throwError(error);
        });
         break; 
      } 
      case 2: { 
        this.questionService.getAllPostsByCategoryName(form.value.searchtext).subscribe((posts)=>{
          this.posts = posts;
        },
        (error)=>{
          throwError(error);
        });
        break; 
     } 
     case  3: { 
      this.questionService.getAllPostsByProductId(form.value.searchtext).subscribe((posts)=>{
        this.posts = posts;
      },
      (error)=>{
        throwError(error);
      });
      break; 
   } 
      default: { 
         //statements; 
         break; 
      } 
   } 

  }
}
