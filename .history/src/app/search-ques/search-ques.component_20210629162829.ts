import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { PostModel } from '../shared/post-model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-search-ques',
  templateUrl: './search-ques.component.html',
  styleUrls: ['./search-ques.component.css']
})
export class SearchQuesComponent implements OnInit {
  selectedCriteria: string = "category";
  posts : PostModel[];
  constructor(private postService :PostService) { }

  ngOnInit(): void {
 
  }

 
  

  search(form : NgForm){
    if(form.invalid){
        return;
    }
    this.posts = [];
    
    switch(form.value.criteria) { 
      case 1: { 
        this.postService.getAllPostsByUser(form.value.searchtext).subscribe((posts)=>{
          this.posts = posts;
        },
        (error)=>{
          throwError(error);
        });
         break; 
      } 
      case 2: { 
        this.postService.getAllPostsByCategoryName(form.value.searchtext).subscribe((posts)=>{
          this.posts = posts;
        },
        (error)=>{
          throwError(error);
        });
        break; 
     } 
     case  3: { 
      this.postService.getAllPostsByProductId(form.value.searchtext).subscribe((posts)=>{
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
