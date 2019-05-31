import { Component, OnInit } from '@angular/core';
import { TriviaGameService } from '../trivia-game-service.service';
import { Question } from '../models/question'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question : Question;

  constructor(private gameSvc: TriviaGameService) { }

  ngOnInit() {
    this.getQuestionModel();
  }

  getQuestionModel() {
    this.gameSvc.getRandomQuestion().then(question => this.question = question);
  }
}
