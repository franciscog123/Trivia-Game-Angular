import { Component, OnInit } from '@angular/core';
import { GameMode } from '../models/gameMode';
import { Category } from '../models/category';
import { TriviaGameService } from '../trivia-game-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  gameModes: GameMode[];
  categories: Category[];
  selGameModeId: number;
  selCategoryId: number;

  constructor(private gameSvc: TriviaGameService) { 
  }

  ngOnInit() {
    this.getCategoryModels();
    this.getGameModeModels();
  }

  getGameModeModels() {
    this.gameSvc.getGameModes().then(gameModes => this.gameModes = gameModes);
  }

  getCategoryModels() {
    this.gameSvc.getCategories().then(categories => this.categories = categories);
  }
}
