import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { SearchQuesComponent } from './search-ques/search-ques.component';
import { ViewQuestionComponent } from './question/view-question/view-question.component';
import { AuthGuard } from './auth/auth.guard';
import { ListCategoryComponent } from './category/list-categories/list-categories.component';
import { CreateQuestionComponent } from './question/create-question/create-question.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { CategoryQuestionsComponent } from './category/category-questions/category-questions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-question/:id', component: ViewQuestionComponent },
  { path: 'user-profile/:name', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'list-categories', component: ListCategoryComponent },
  { path: 'create-question', component: CreateQuestionComponent, canActivate: [AuthGuard] },
  { path: 'create-category', component: CreateCategoryComponent, canActivate: [AuthGuard] },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)
  },
  { path: '**', component: HomeComponent },
  { path: 'view-category/:id', component: ListCategoryComponent },
  // new addition
  { path: 'by-category/:id', component: CategoryQuestionsComponent },
  { path: 'search-ques', component: SearchQuesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }