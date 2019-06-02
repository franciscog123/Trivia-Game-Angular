import { Component, OnInit } from '@angular/core';
import { TriviaGameService } from '../trivia-game-service.service';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { Question } from '../models/question'
import { Choice } from '../models/choice';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css', '../app.component.css']
})
export class QuestionComponent implements OnInit {

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
    this.gameSvc.getRandomQuestion().then(question => this.question = question);
  }

  getNextQuestion() {
    this.submitted = false;
    this.answer = null;
    this.answerForm.reset();
    this.gameSvc.getRandomQuestion().then(question => this.question = question);
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
}
