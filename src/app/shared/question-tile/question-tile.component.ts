import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { QuestionService } from '../question.service';
import { QuestionModel } from '../question-model';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-tile',
  templateUrl: './question-tile.component.html',
  styleUrls: ['./question-tile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class QuestionTileComponent implements OnInit {

  faComments = faComments;
  @Input() questions: QuestionModel[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToQuestion(id: number): void {
    this.router.navigateByUrl('/view-question/' + id);
  }
}
