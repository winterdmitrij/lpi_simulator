import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { questions as data} from '../data/questions';
import { Question } from '../models/question';


@Injectable({ providedIn: 'root' })
export class QuestionsService {
    numberOfQuestions: number;      // Fragen Anzahl mit def-Wert = 20
    typeIdOfQuestions: string;      // Fragentypen   mit def-Wert = 'ALL'

    questions: Question[] = data;   // Fragenpull aus Datei /models/questsion.ts

    constructor() {}

    // Fragen Anzahl
    getNumberOfQuestions(): number {
        return this.numberOfQuestions;
    } 

    setNumberOfQuestions(inNum: number) {
        this.numberOfQuestions = inNum;
    }

    // Fragentype
    getTypeIdOfQuestions(): string {
        return this.typeIdOfQuestions;
    }

    setTypeIdOfQuestions(inTypeId: string) {
        this.typeIdOfQuestions = inTypeId;
    }

    // Fragenpull
    getAllQuestions():Question[] {
        return this.questions;
    }

    getQuestionsBy(inTypeId: string):Question[] {
        let tmpQuestions: Question[] = data; //this.getAllQuestions(); //data;
        console.log('tmp-Fragen', tmpQuestions);
        

        if (inTypeId == "ALL") {
            tmpQuestions;
        }
        else
        {
            tmpQuestions = tmpQuestions.filter(q => q.questionTypeId === inTypeId);
        };

        return tmpQuestions;
    }
}