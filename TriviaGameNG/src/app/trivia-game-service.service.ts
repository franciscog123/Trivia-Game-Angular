import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Category } from './models/category'
import { Question } from './models/question'
import { HttpClient } from '@angular/common/http';
import { GameMode } from './models/gameMode';
import { Quiz } from './models/quiz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaGameService {

  constructor(private http: HttpClient) { }

  private static getUserUrl(userId: number = 1): string {
    return `https://1904-guerrerof-triviagameapi.azurewebsites.net/api/user/${userId}`;
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

  private static getQuizUrl(): string {
    return `https://1904-guerrerof-triviagameapi.azurewebsites.net/api/quiz/`
  }

  addQuiz(quiz: Quiz): Observable<Quiz> {
    try {
      console.log("trying to post")
      return this.http.post<Quiz>(TriviaGameService.getQuizUrl(), quiz)
    }
    catch(ex)
    {
      console.log("something went wrong");
    }
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

  getUser(id: number = 1): Promise<User> {
    return this.http.get<User>(TriviaGameService.getUserUrl(id))
    .toPromise()
    .then(res => res);
  }

  getRandomQuestion(id: number): Promise<Question> {
    return this.http.get<Question>(TriviaGameService.getRandomQuestionUrl(id))
    .toPromise();
  }
}
