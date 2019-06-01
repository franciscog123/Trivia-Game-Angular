import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: 'quiz', component: QuizComponent }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
