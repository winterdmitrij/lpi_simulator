import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Question, QuestionType } from "./question";


@Injectable({
    providedIn: 'root'
})
export class QuestionStoreService {
    questions: Question[];
    questionTypes: QuestionType[];
    questionNumber: number = 15;
    questionTypeId: string = 'ALL';
    questionNumbers: number[];


    constructor () {
        this.questionTypes = [
            {name: "Multiple-Choice-Fragen", id: "MC"},
            {name: "Single-Choice-Fragen", id: "SC"},
            {name: "Fill-In-Fragen", id: "FI"},
            {name: "Alle Fragentypen", id: "ALL"},
        ];
        
        this.questionNumbers = [10, 20, 30, 40, 50, 60];

        this.questions = [];
    }

// Prozeduren
    // Gibt alle Fragentypen zurück
    getAllQuestionTypes() {
        return this.questionTypes;
    }

    // Gibt alle Fragenmengen zurück
    getAllQuestionNumbers() {
        return this.questionNumbers;
    }

    // Gibt notwendige Fragentyp zurück
    getQuestionTypeId(inQuestionTypeId: string): string {
        return this.questionTypeId = inQuestionTypeId;
    }

    getQuestionNumber(inQuestionNumber: number): number {
        return this.questionNumber = inQuestionNumber;
    }

// Gibt alle Fragen zurück
    getAllQuestions() {
        return this.questions;
    }

}