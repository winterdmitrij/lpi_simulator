import { Injectable } from "@angular/core";
import { QuestionsPull, Page } from "../models/definitions";
import { questionPulls as questsPulls} from '../data/questions-pulls';

@Injectable({
    providedIn: 'root'
})
export class QuestionTypeService {
    questionsPulls: QuestionsPull[];    // Pragenpull-Array
    questionCounts: number[];           // Fragenmengen-Array
    pageNumbers: number[];              // Seitennummern-Array
    pages: Page[] = [];  // Pages

    constructor () {
        // Pragenpull-Array
        this.questionsPulls = questsPulls;
        // Fragenmengen-Array
        this.questionCounts = [10, 20, 30];
        // Seitennummern-Array
        this.pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
        // Pages 
//        this.pages = this.getPagesBy();
    }
// Pragenpull-Array
    /**
     * Gibt das Array von allen Fragenpulls zurück
     * @returns 
     */
    getAllQuestionsPulls(): QuestionsPull[]{
        return this.questionsPulls;
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
    getPagesBy(inAllQustionsCount: number, inCurQuestionsCount: number): Page[] {
        let newPage: Page;
        let newPages: Page[] = [];
        let newName: string;
        let count: number;
        let firstNum: number;
        let lastNum: number;

        count = Math.ceil(inAllQustionsCount / inCurQuestionsCount);

        for (let i = 0; i < count; i++) {
            firstNum = i * inCurQuestionsCount + 1;
            lastNum = ((i * inCurQuestionsCount + +inCurQuestionsCount) >  inAllQustionsCount ? inAllQustionsCount : (i * inCurQuestionsCount + +inCurQuestionsCount));

            newName = "Fragen: von " + firstNum + " bis " + lastNum;
                        
            newPage = {
                num: i+1,
                name: newName
            }

           newPages.push(newPage);
        }
        return newPages;
    }


// ToDo: Löschen??
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