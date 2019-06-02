import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Category } from './models/category'
import { Question } from './models/question'
import { HttpClient } from '@angular/common/http';
import { GameMode } from './models/gameMode';

@Injectable({
  providedIn: 'root'
})
export class TriviaGameService {

  private static getUserUrl(userId: number = 1): string {
    return `https://1904-guerrerof-triviagameapi.azurewebsites.net/api/user/1`;
  }

  private static getRandomQuestionUrl(id: number): string {
    return `https://1904-guerrerof-triviagameapi.azurewebsites.net/api/quiz/getrandomquestion/${id}`;
  }

  private static getGameModeUrl(): string {
    return 'https://1904-guerrerof-triviagameapi.azurewebsites.net/api/gamemode';
  }

  private static getCategoryUrl(): string {
    return 'https://1904-guerrerof-triviagameapi.azurewebsites.net/api/question/getcategories';
  }

  getGameModes(): Promise<GameMode[]> {
    return this.http.get<GameMode[]>(TriviaGameService.getGameModeUrl())
    .toPromise()
    .then(res => res);
  }

  getCategories(): Promise<Category[]> {
    return this.http.get<Category[]>(TriviaGameService.getCategoryUrl())
    .toPromise()
    .then(res => res);
  }

  getUser(): Promise<User> {
    return this.http.get<User>(TriviaGameService.getUserUrl())
    .toPromise()
    .then(res => res);
  }

  getRandomQuestion(id: number): Promise<Question> {
    return this.http.get<Question>(TriviaGameService.getRandomQuestionUrl(id))
    .toPromise();
  }

  constructor(private http: HttpClient) { }
}
