import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router'
import { switchMap } from 'rxjs/operators';
import { Quiz } from '../models/quiz';
import { TriviaGameService } from '../trivia-game-service.service';
import { User } from '../models/user';
import { GameMode } from '../models/gameMode';
import { Category } from '../models/category';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, Quiz {
  quizId: number;
  userId: number;
  gameModeId: number;
  categoryId: number;
  score: number;
  time: number;


  constructor(private route: ActivatedRoute, 
              private router: Router,  
              private gameSvc: TriviaGameService) { }

  ngOnInit() {
    this.gameModeId = <number><unknown>this.route.snapshot.paramMap.get("gameModeId");
    this.userId = <number><unknown>this.route.snapshot.paramMap.get("userId");
    this.categoryId = <number><unknown>this.route.snapshot.paramMap.get("categoryId");
  };
    
}


