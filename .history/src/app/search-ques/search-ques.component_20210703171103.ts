import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { QuestionModel } from '../shared/question-model';

import { QuestionService } from '../shared/question.service';

@Component({
  selector: 'app-search-ques',
  templateUrl: './search-ques.component.html',
  styleUrls: ['./search-ques.component.css']
})
export class SearchQuesComponent implements OnInit {
  selectedCriteria: string = "category";
  questions : QuestionModel[];
  constructor(private questionService :QuestionService) { }

  ngOnInit(): void {
 
  }

 
  

  search(form : NgForm){
    if(form.invalid){
        return;
    }
    this.questions = [];
    
    switch(form.value.criteria) { 
      case 1: { 
        this.questionService.getAllQuestionsByUser(form.value.searchtext).subscribe((posts)=>{
          this.questions = posts;
        },
        (error)=>{
          throwError(error);
        });
         break; 
      } 
      case 2: { 
        this.questionService.getAllQuestionsByCategoryName(form.value.searchtext).subscribe((posts)=>{
          this.questions = posts;
        },
        (error)=>{
          throwError(error);
        });
        break; 
     } 
     case  3: { 
      this.questionService.getAllQuestionsByProductId(form.value.searchtext).subscribe((posts)=>{
        this.questions = posts;
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
