import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full'},
  { path: 'quiz/:userId/:gameModeId/:categoryId', component: QuizComponent },
  { path: 'create', component: CreateComponent }
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
