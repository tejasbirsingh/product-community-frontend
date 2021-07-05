import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CategoryModel } from './category-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BACKEND_URL = "http://localhost:8080/api/category";
  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Array<CategoryModel>> {
    return this.http.get<Array<CategoryModel>>(this.BACKEND_URL);
  }

  createCategory(categoryModel: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(this.BACKEND_URL,
    categoryModel);
  }
}
