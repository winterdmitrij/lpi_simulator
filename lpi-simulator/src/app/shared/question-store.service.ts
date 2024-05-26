import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Question, questionType } from "./question";


@Injectable({
    providedIn: 'root'
})
export class QuestionStoreService {
    questions: Question[];
    questionTypes: questionType[];

    constructor () {
        this.questionTypes = [
            {name: "Multiple-Choice-Fragen", id: "MC"},
            {name: "Single-Choice-Fragen", id: "SC"},
            {name: "Fill-In-Fragen", id: "FI"},
            {name: "Alle Fragentypen", id: "ALL"},
        ];
        
        this.questions = [
        ]
    }

// Prozeduren
    // Gibt alle Fragentypen zurück
    getAllQuestionTypes() {
        return this.questionTypes;
    }

/*    // bekommen FrTyp und -Anzahl aus LMEinst.
    getFragenTyp(inQuestionType: string): string {
        return this.questionTypes = inQuestionType;
    }
*/

    // Gibt alle Fragen zurück
    getAllQuestions() {
        return this.questions;
    }

}