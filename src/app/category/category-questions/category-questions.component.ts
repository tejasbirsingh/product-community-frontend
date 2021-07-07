import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/shared/question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionModel } from 'src/app/shared/question-model';

@Component({
  selector: 'category-questions',
  templateUrl: './category-questions.component.html',
  styleUrls: ['./category-questions.component.css']
})
export class CategoryQuestionsComponent implements OnInit {

  id: number;
  questions: QuestionModel[];
  questionLength: number;
  isLoading = false;

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService,private router: Router
   ) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.isLoading = true;
    this.questionService.getAllQuestionsByCategory(this.id).subscribe(data => {
      this.questions = data;
      this.questionLength = data.length;
      this.isLoading = false;
    });
   
   
  }

  ngOnInit(): void {
  }
  goToQuestion(id: number): void {
    this.router.navigateByUrl('/view-question/' + id);
  }
}
