import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/shared/question.service';
import { throwError } from 'rxjs';
import { CategoryModel } from 'src/app/category/category-response';
import { CategoryService } from 'src/app/category/category.service';
import { QuestionModel } from 'src/app/shared/question-model';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  createQuestionForm: FormGroup;
  categories: Array<CategoryModel>;
  isFormSubmitted = false;
  questionId: number;
  question: QuestionModel;

  constructor(private router: Router, private questionService: QuestionService,
    private categoryService: CategoryService, private activateRoute: ActivatedRoute,) {
      this.questionId = this.activateRoute.snapshot.params.id;
      this.getQuestionById();

  
  }

  ngOnInit() {
    this.createQuestionForm = new FormGroup({
      questionName: new FormControl('', Validators.required),
      categoryName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      productId: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),

    });
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    }, error => {
      throwError(error);
    });
    this.createQuestionForm.setValue({
      "questionName": this.question?.questionName,
      "description": this.question?.description,
      "productId": this.question?.productId,
      "url" :  this.question?.url,
      "categoryName" : this.question?.categoryName,
      
  });
  }
  get f() { return this.createQuestionForm.controls; }

  private getQuestionById() {
    this.questionService.getQuestion(this.questionId).subscribe(data => {
      this.question = data;
    }, error => {
      throwError(error);
    });
  }

  updateQuestion() {

    this.isFormSubmitted = true;
    if (this.createQuestionForm.invalid) return;

    this.question.questionName = this.createQuestionForm.get('questionName').value;
    this.question.categoryName = this.createQuestionForm.get('categoryName').value;
    this.question.url = this.createQuestionForm.get('url').value;
    this.question.description = this.createQuestionForm.get('description').value;
    this.question.productId = this.createQuestionForm.get('productId').value;
    this.questionService.updateQuestion(this.question).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    })
  }

  discardQuestion() {
    this.router.navigateByUrl('/');
  }


}