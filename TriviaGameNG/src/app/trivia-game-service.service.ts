import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Category } from './models/category'
import { Question } from './models/question'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TriviaGameService {

  private static getUserUrl(userId: number = 1): string {
    return `https://1904-guerrerof-triviagameapi.azurewebsites.net/api/user/1`;
  }

  private static getRandomQuestionUrl(): string {
    return `https://1904-guerrerof-triviagameapi.azurewebsites.net/api/quiz/getrandomquestion/1`;
  }

  getUser(): Promise<User> {
    return this.http.get<User>(TriviaGameService.getUserUrl())
    .toPromise()
    .then(res => res);
  }

  getRandomQuestion(): Promise<Question> {
    return this.http.get<Question>(TriviaGameService.getRandomQuestionUrl())
    .toPromise();
  }

  constructor(private http: HttpClient) { }
}
