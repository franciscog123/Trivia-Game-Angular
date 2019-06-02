import { Component, OnInit, Input, Output, } from '@angular/core';
import { TriviaGameService } from '../trivia-game-service.service';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { Question } from '../models/question'
import { Choice } from '../models/choice';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css', '../app.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() gameModeId: number;
  @Input() userId: number;
  @Input() categoryId: number;
  @Output() newScore = new EventEmitter<number>()
  @Output() finished = new EventEmitter<boolean>();
  question : Question;
  answerForm: FormGroup;
  answer: Choice;
  submitted: boolean = false;

  constructor(private gameSvc: TriviaGameService) { 
    this.answerForm = new FormGroup({
      choiceId: new FormControl('')
    })
  }

  ngOnInit() {
    this.getQuestionModel();
  }

  getQuestionModel() {
    this.gameSvc.getRandomQuestion(this.categoryId).then(question => this.question = question);
  }

  getNextQuestion() {
    this.submitted = false;
    this.answer = null;
    this.answerForm.reset();
    this.gameSvc.getRandomQuestion(this.categoryId).then(question => this.question = question);
  }

  checkAnswer() {
    if(!this.answerForm.get('choiceId').value) {
      return;
    }
    this.submitted = true;
    this.question.questionChoices.forEach( (choice) => {
      if(choice.choiceId == this.answerForm.get('choiceId').value) {
        this.answer = choice;
      }
    });
  }

  updateScore() {
    this.newScore.emit(this.question.value);
  }

  finish() {
    this.finished.emit(true);
  }
}
