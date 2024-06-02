import { Injectable } from "@angular/core";
import { questions as quests} from '../data/questions';
import { Question } from '../models/definitions';


@Injectable({ providedIn: 'root' })
export class QuestionsService {
    typeIdOfQuestions: string;      // Fragentypen
    countOfQuestions: number;       // Fragenanzahl
    pageNumber: number;             // Seitennummer

    questions: Question[];          // Fragenpull

    constructor() {
        this.questions = quests;    // Fragenpull aus der Datei /models/questsion.ts erhalten
    }

    /**
     * Getters und Setters
     * @returns 
     */
    // Fragentype
    getTypeIdOfQuestions(): string {
        return this.typeIdOfQuestions;
    }

    setTypeIdOfQuestions(inTypeId: string) {
        this.typeIdOfQuestions = inTypeId;
    }

    // Fragenanzahl
    getCountOfQuestions(): number {
        return this.countOfQuestions;
    } 

    setCountOfQuestions(inCount: number) {
        this.countOfQuestions = inCount;
    }

    // Seitennummer
    getPageNumber(): number {
        return this.pageNumber;
    }

    setPageNumber(inPageNum: number) {
        this.pageNumber = inPageNum;
    }

    /**
     * Fragenpull
     */
    // Gibt Fragen-Array ohne Filter zurück
    getAllQuestions():Question[] {
        return this.questions;
    }

    // Gibt Fragen-Array bzgl. Fragentyp zurück
    getQuestionsBy(inTypeId: string): Question[] {
        let tmpQuestions: Question[] = this.questions; //.getAllQuestions(); //quests;
        //console.log('tmp-Fragen', tmpQuestions);
        
        if (inTypeId == "ALL") {
            tmpQuestions;
        }
        else
        {
            tmpQuestions = tmpQuestions.filter(q => q.questionTypeId === inTypeId);
        };

        return tmpQuestions;
    }

    // Gibt die Länge des Fr-Arrays bzgl. Fragentyp zurück
    getQuestionsCountBy(inTypeId: string): number {
        return this.getQuestionsBy(inTypeId).length;
    }

    // Generiert den Fragenpull bzgl. Fragentyp, Fragenanzahl und Seitennummer
    generateQuestionsBy(inTypeId: string, inCount: number, inPageNum: number): Question[] {
        // typesierten Fragenpull erhalten
        let typQuestions: Question[] = this.getQuestionsBy(inTypeId);

        // Indexe
        let strIdx: number = inCount * (inPageNum - 1);
        let endInf: number = inCount * inPageNum; //this.getQuestionsCountBy(inTypeId) - inCount * inPageNum;
        
        return typQuestions.slice(strIdx, endInf);
    }

    // Random-Fragepul generieren
    generateRndQuestionPul(): Question[] {
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

        return rndQuestions.slice(0, 60);
    }
}