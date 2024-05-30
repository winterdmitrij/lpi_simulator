import { Injectable } from "@angular/core";
import { QuestionType } from "../models/definitions";
import { questionTypes as questTypes} from '../data/question-types';

@Injectable({
    providedIn: 'root'
})
export class QuestionTypeService {
    questionTypes: QuestionType[];                          // Fragetypen
    questionCounts: number[];                               // Fragenanzahl-Varianten
    pageNumbers: number[];                                  // Seitennummers

    constructor () {
        this.questionTypes = questTypes;                    // Fragetypen aus der Datei /models/questsion-types.ts  ermitteln

        this.questionCounts = [10, 20, 30, 40, 50, 60];     // Fragenanzahl-Varianten erstellen

        this.pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }

    // Gibt alle Fragentypen zurück
    getAllQuestionTypes(): QuestionType[] {
        return this.questionTypes;
    }

    // Gibt alle Fragenmengen zurück
    getAllQuestionNumbers(): number[] {
        return this.questionCounts;
    }

    // Gibt Seitensnummer-Array zurück
    getAllPageNumbersBy(inLength: number): number[] {
        return this.pageNumbers.slice(0, inLength);
    }
}