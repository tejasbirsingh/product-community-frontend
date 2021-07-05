import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../category-response';
import { throwError } from 'rxjs';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories: Array<CategoryModel>;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    }, error => {
      throwError(error);
    })
  }
}