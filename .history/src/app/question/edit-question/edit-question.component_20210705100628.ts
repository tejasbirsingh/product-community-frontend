import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/shared/question.service';
import { throwError } from 'rxjs';
import { CategoryModel } from 'src/app/category/category-response';
import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  createQuestionForm: FormGroup;
  questionPayload: CreateQuestionPayload;
  categories: Array<CategoryModel>;
  isFormSubmitted = false;
  
  constructor(private router: Router, private questionService: QuestionService,
    private categoryService: CategoryService) {
    this.questionPayload = {
      questionName: '',
      url: '',
      description: '',
      categoryName: '',
      productId:''
    }
  }

  ngOnInit() {
    this.createQuestionForm = new FormGroup({
      questionName: new FormControl('', Validators.required),
     categoryName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      productId : new FormControl('',Validators.required),
      description: new FormControl('', Validators.required),

    });
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    }, error => {
      throwError(error);
    });
  }
  get f() { return this.createQuestionForm.controls; }

  createQuestion() {

    this.isFormSubmitted = true;
    if(this.createQuestionForm.invalid) return;

    this.questionPayload.questionName = this.createQuestionForm.get('questionName').value;
    this.questionPayload.categoryName = this.createQuestionForm.get('categoryName').value;
    this.questionPayload.url = this.createQuestionForm.get('url').value;
    this.questionPayload.description = this.createQuestionForm.get('description').value;
    this.questionPayload.productId = this.createQuestionForm.get('productId').value;
    this.questionService.createQuestion(this.questionPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    })
  }

  discardQuestion() {
    this.router.navigateByUrl('/');
  }

  
}