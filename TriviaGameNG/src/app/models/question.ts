import { Choice } from './choice';
import { Category } from './category';

export interface Question {
    questionId: number;
    categoryId: number;
    questionString: string;
    value: number;
    category: Category;
    questionChoices: Choice[];
}