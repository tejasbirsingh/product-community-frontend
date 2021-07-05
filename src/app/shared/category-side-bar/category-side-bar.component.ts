import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/category/category-response';
import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-category-side-bar',
  templateUrl: './category-side-bar.component.html',
  styleUrls: ['./category-side-bar.component.css']
})
export class CategorySideBarComponent implements OnInit {
  categories: Array<CategoryModel> = [];
  displayViewAll: boolean;

  constructor(private categoryService: CategoryService) {
    this.categoryService.getAllCategories().subscribe(data => {
      if (data.length > 3) {
        this.categories = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.categories = data;
      }
    });
  }

  ngOnInit(): void { }

}
