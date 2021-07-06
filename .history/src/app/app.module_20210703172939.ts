import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptor } from './token-interceptor';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VoteButtonComponent } from './shared/vote-button/vote-button.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';

import { EditorModule } from '@tinymce/tinymce-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { AnswerVoteButtonComponent } from './shared/answer-vote-button/answer-vote-button.component';
import { SearchQuesComponent } from './search-ques/search-ques.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CategorySideBarComponent } from './shared/category-side-bar/category-side-bar.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { CreateQuestionComponent } from './question/create-question/create-question.component';
import { ListCategoryComponent } from './category/list-categories/list-categories.component';
import { ViewQuestionComponent } from './question/view-question/view-question.component';
import { CategoryQuestionsComponent } from './category/category-questions/category-questions.component';
import { QuestionTileComponent } from './shared/question-tile/question-tile.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    QuestionTileComponent,
    VoteButtonComponent,
    SideBarComponent,
    CategorySideBarComponent,
    CreateCategoryComponent,
    CreateQuestionComponent,
    ListCategoryComponent,
    ViewQuestionComponent,
    UserProfileComponent,
    CategoryQuestionsComponent,
    AnswerVoteButtonComponent,
    SearchQuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule,
    NgbModule,
    FormsModule,
    AngularMaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
