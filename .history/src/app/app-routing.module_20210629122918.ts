import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { CreateSubproductComponent } from './subproduct/create-subproduct/create-subproduct.component';
import { ListSubproductsComponent } from './subproduct/list-subproducts/list-subproducts.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { SubproductPostsComponent } from './subproduct/subproduct-posts/subproduct-posts.component';
import { SearchQuesComponent } from './search-ques/search-ques.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
  { path: 'user-profile/:name', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'list-subproducts', component: ListSubproductsComponent },
  { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'create-subproduct', component: CreateSubproductComponent, canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'view-subproduct/:id', component: ListSubproductsComponent },
  // new addition
  {path:'by-subproduct/:id', component: SubproductPostsComponent},
  {path:'search-ques', component: SearchQuesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }