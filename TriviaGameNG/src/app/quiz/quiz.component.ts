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
export class QuizComponent implements OnInit {

  quiz: Quiz;
  user: User;
  gameMode: GameMode;
  category: Category;

  constructor(private route: ActivatedRoute, 
              private router: Router,  
              private gameSvc: TriviaGameService) { }

  ngOnInit() {
  }

}
