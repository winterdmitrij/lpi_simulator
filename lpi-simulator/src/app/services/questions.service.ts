import { Injectable } from "@angular/core";
//import { questions as quests} from '../data/questions';
import { questions as quest1} from '../data/marc-questions';
import { questions as quest2} from '../data/soeren-questions';
import { questions as quest3} from '../data/dmitrij-questions';
import { Question } from '../models/definitions';


@Injectable({ providedIn: 'root' })
export class QuestionsService {
    questions: Question[];          // Fragenpull

    constructor() {
        this.questions = quest1;    // Fragenpull aus der Datei /models/*.ts erhalten
    }




    /**
     * Gibt das kompletten Fragen-Array zurück.
     * @returns 
     */
    getAllQuestions():Question[] {
        return this.questions;
    }

    /**
     * Gibt das Fragen-Array zurück, bzgl.:
     * @param inQuestionsCount  Fragenmenge
     * @param inPageNum         Seitennummer, DEFAULT: 0
     * @returns 
     */
    getQuestionsBy(inQuestionsCount: number, inPageNum: number = 1): Question[] {
        // Indexe
        let strIdx: number = inQuestionsCount * (inPageNum - 1);
        let endInf: number = strIdx + inQuestionsCount;
        return this.getAllQuestions().slice(strIdx, endInf);
    }


    /**
     * Gibt das Array aus der zufälligen Fragen zurück, bzgl:
     * @param inCount   // Fragen-Anzahl, DEFAULT: 60
     * @returns 
     */
    getRndQuestionsBy(inCount: number = 60): Question[] {
        let rndIdx: number;
        let tmpQuestions: Question[] = this.getAllQuestions();
        let rndQuestions: Question[] = [];

        // Randome Reihenfolge aus tmp-Fragen generieren
        while ( tmpQuestions.length > 0 ) {
            // rndIdx generieren
            rndIdx = Math.floor((Math.random() * tmpQuestions.length));
            // Item aus tmpQuestions zu rndQuestions kopieren
            rndQuestions.push(tmpQuestions[rndIdx]);
            // Den Item des tmpQuestions löschen
            tmpQuestions.splice(rndIdx, 1);
        };

        return rndQuestions.slice(0, inCount);
    }


//  Fragenanzahl
    /**
     * Gibt die Anzahl der allen Fragen zurück.
     * @returns 
     */
    getAllQuestionsCount(): number {
        return this.questions.length;
    }


// Einziege Frage
    /**
     * Gibt die Frage zurück, bzgl.:
     * @param inQuestionId  Frage-ID
     * @returns 
     */
    getQuestionBy(inQuestionId: string): Question {
        return this.questions.filter(quest => quest.questionId === inQuestionId)[0];
    }
}