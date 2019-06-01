import { Question } from './question';
import { Category } from './category';
import { GameMode } from './gameMode';

export interface quiz {
    quizId: number;
    userId: number;
    categoryId: number;
    gameModeId: number;
    score: number;
    time: number;
    questions: Question[];
    category: Category;
    gameMode: GameMode;
}