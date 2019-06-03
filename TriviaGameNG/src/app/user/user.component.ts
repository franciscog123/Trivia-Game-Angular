import { Component, OnInit } from '@angular/core';
import { TriviaGameService } from '../trivia-game-service.service';
import { User } from '../models/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private gameSvc: TriviaGameService) { }

  ngOnInit() {
    this.getUserModel();
  }

  getUserModel() {
    this.gameSvc.getUser(2).then(user => this.user = user);
  }
}
