import { Question } from './question';
import { Category } from './category';
import { GameMode } from './gameMode';

export class Quiz {
    quizId: number;
    userId: number;
    categoryId: number;
    gameModeId: number;
    score: number;
    time: Date;
    questions: null;
    category: null;
    gameMode: null;
}