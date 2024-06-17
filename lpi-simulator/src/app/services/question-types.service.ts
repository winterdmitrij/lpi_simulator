import { Injectable } from "@angular/core";
import { QuestionType } from "../models/definitions";
import { questionTypes as questTypes} from '../data/question-types';

@Injectable({
    providedIn: 'root'
})
export class QuestionTypeService {
    questionCounts: number[];   // Fragenmengen-Array
    pageNumbers: number[];      // Seitennummern-Array

    constructor () {
        // Fragenmengen-Array
        this.questionCounts = [10, 20, 30, 50, 62];
        // Seitennummern-Array
        this.pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }

// Fragenmengen-Array
    /**
     * Gibt das Array von der möglichen Fragenmengen zurück.
     * @returns 
     */
    getAllQuestionNumbers(): number[] {
        return this.questionCounts;
    }

// Seitennummern-Array
    /**
     * Gibt das Array von Seitennummern zurück, bzgl.:
     * @param inAllQustionsCount    Anzahl von allen Fragen, die es in der DB gibt,
     * @param inCurQuestionsCount   Anzahl der Fragen pro Training.
     * @returns 
     */    
    getPagesArrayBy(inAllQustionsCount: number, inCurQuestionsCount: number): number[]{
        let count: number;
        count = (inAllQustionsCount / inCurQuestionsCount) + ((inAllQustionsCount % inCurQuestionsCount) > 0 ? 1 : 0);
        return this.getAllPageNumbersBy(count);
    }

    /**
     * Gibt das Array von Seitennummern zurück, bzgl.:
     * @param inLength              Anzahl der Elementen des Arrays.
     * @returns 
     */
    getAllPageNumbersBy(inLength: number): number[] {
        return this.pageNumbers.slice(0, inLength);
    }
}