import { Component, OnInit } from '@angular/core';
import { Question, UserAnswer } from '../models/definitions';
import { QuestionsService } from '../services/questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partial-exam-mode',
  templateUrl: './partial-exam-mode.component.html',
  styleUrls: ['./partial-exam-mode.component.css']
})
export class PartialExamModeComponent implements OnInit{
  // Constanten
  typeIdOfQuestions: string = 'ALL';  // Fragentyp
  numberOfQuestions: number = 60;     // Fragenmenge
//  pageNumber: number = 1;             // Seitennummer

  // Fragenpull
  questions: Question[] = [];     // Fragen-Array
  curQuestion: Question;          // Aktuele Frage des Fragenpull
  curQuestionNumber: number = 0;  // Nummer der Fragen

  // Benutzer-Antworten
  userAnswers: UserAnswer[] = []; // Antworten-Array
  userAnswer: UserAnswer;         // 
  isAnswered?: boolean;           //
  isCorrect?: boolean;            //

  // Zählers
  numOfCorrect: number;           // Anzahl richtirer Antworten
  numOfUncorrect: number;         // Anzahl falscher Antworten
  numOfUnanswered: number;        // Anzahl Fragen ohne Antwort

  // Flags
//  show: boolean;                  // Hilfe anzeigen
//  exam: boolean;                  // Antwort prüfen
  nextDisable: boolean;           // Taste Next-Disable

  constructor(
    private qs: QuestionsService,
    private router: Router
  ) { }


  ngOnInit(): void {
    // Flags
//    this.show = false;
//    this.exam = false;
    this.nextDisable = false;

//    // Variablen von EinstellungsSeite erhalten               // ToDo: Richtig lösen
//    this.typeIdOfQuestions = this.qs.getTypeIdOfQuestions();
//    this.numberOfQuestions = this.qs.getCountOfQuestions();
//    this.pageNumber = this.qs.getPageNumber();
  
    // ToDo: Random-Fragenpull generieren
    this.questions = this.qs.generateQuestionsBy(this.typeIdOfQuestions, this.numberOfQuestions, 1);
    
    // Fragenpull durchgehen und
    this.questions.map(quest => {
      // - Antworten-Array erstellen und befüllen
      this.userAnswers.push(this.userAnswer = {
        questionId: quest.questionId, // mit Frage-Id
        isAnswered: false,            // mit unbeantwortet
        isCorrect: false              // mit falsh
      });

      // - Gegebene Antworten aus dem Fragenpull leeren
      quest.answers?.map(answ => answ.givenAnswer = false);
    });

    // Zählers
    this.numOfCorrect = 0;
    this.numOfUncorrect = 0;
    this.numOfUnanswered = this.questions.length;

    // Aktuelle Frage
    this.curQuestionNumber = 0;
    this.curQuestion = this.questions[this.curQuestionNumber];
  }



//----------------------- Bottons ---------------------------------
  /**
   * Zurück
   */
  back() {
//    // Antwort überprüfen und sie im userAnswers-Array hinzufügen
//    this.chkAnswer();
//
//    // Zehlen richtige und falsche Antworten
//    this.updInfo();
//
//    if(this.curQuestionNumber > 0)
//    {
//      this.curQuestionNumber--;
//      this.curQuestion = this.questions[this.curQuestionNumber];
//      this.exam = false;
//      this.show = false;
//      this.nextDisable = false;
//    }
  }

  /**
   * Home
   */
  home() {
    this.router.navigate(['', 'home']);
  }

  /**
   * Weiter
   */
  next() {
//    // Antwort überprüfen und sie im userAnswers-Array hinzufügen
//    this.chkAnswer();
//
//    // Zehlen richtige und falsche Antworten
//    this.updInfo();
//    
//    // Zur nächsten Question weiterleiten und Hilfe mit questionsprüfung ausblenden
//    if(this.curQuestionNumber < this.questions.length-1)
//    {
//      this.curQuestionNumber++;
//      this.curQuestion = this.questions[this.curQuestionNumber];
//      this.exam = false;
//      this.show = false;
//    }
//    else
//      this.nextDisable = true;  // disabled für taste "next"
  };


  auswerten() {
//    // aktuelle Antwort überprüfen und sie im userAntworten-Array hinzufügen
//    this.userAntwortKontrolle();
//
//    // Meldung: OK - zur Auswertung, CANCEL - hier bleiben
//    let jain = false;
//    if(this.unbeantworten > 0) {
//      jain = confirm ("\nSind Sie sicher?\nSie haben noch unbeantworteten Fragen!");
//    };
//
//    console.log('jain ist: ', jain);
//
//    if (jain) {
//
//      // in UserAntworten zügen FragenText hinzu (um schönere FragenAusgabe in Auswertung zu haben)
//      this.userAntworten.map(a => {
//        a.frageId = (a.frageId + '. ' + this.fragen.find(f => (f.frageId === a.frageId)).frageText);
//      });
//
//      // Userantworten schicken zu FS
//      this.fs.getUserAntworten(this.userAntworten);
//
//      console.log('UserAntworten, die zur Auswertung geschickt werden, sind: ', this.userAntworten);
//
//      this.router.navigate(['', 'auswertung']);
//    };    
  }




  /**
   * Hilfsfunktion für Singlechoice-Fragen
   */
  deleteAnswer() {
    this.curQuestion.answers?.map(a => a.givenAnswer=false);
  }
}
