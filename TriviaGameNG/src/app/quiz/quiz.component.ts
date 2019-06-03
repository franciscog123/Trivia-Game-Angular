import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router'
import { switchMap } from 'rxjs/operators';
import { Quiz } from '../models/quiz';
import { TriviaGameService } from '../trivia-game-service.service';
import { User } from '../models/user';
import { GameMode } from '../models/gameMode';
import { Category } from '../models/category';
import { Question } from '../models/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: Quiz = new Quiz();


  constructor(private route: ActivatedRoute, 
              private router: Router,  
              private gameSvc: TriviaGameService) { }

  ngOnInit() {
    this.quiz.gameModeId = <number><unknown>this.route.snapshot.paramMap.get("gameModeId");
    this.quiz.userId = <number><unknown>this.route.snapshot.paramMap.get("userId");
    this.quiz.categoryId = <number><unknown>this.route.snapshot.paramMap.get("categoryId");
    this.quiz.score = 0;
  };

  onSubmit(score: number) {
    this.quiz.score += score;
  }
    
  onFinished(finished: boolean) {
    this.gameSvc.addQuiz(this.quiz).subscribe(quiz => console.log(quiz));
    // this.router.navigate(['']);
  }
}


