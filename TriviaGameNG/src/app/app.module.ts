import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { QuestionComponent } from './question/question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    QuestionComponent,
    QuizComponent,
    CreateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatSelectModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
