import { Component, OnInit } from '@angular/core';
import { Question, UserAnswer } from '../models/definitions';
import { QuestionsService } from '../services/questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partial-exam',
  templateUrl: './partial-exam.component.html',
  styleUrls: ['./partial-exam.component.css']
})
export class PartialExamComponent implements OnInit{
  // Constanten
  questionsCont: number = 60;       // Fragenmenge

  // Fragenpull
  questions: Question[] = [];       // Fragen-Array
  curQuestion: Question;            // Aktuele Frage des Fragenpull
  curQuestionNumber: number = 0;    // Nummer der Fragen

  // Benutzer-Antworten
  userAnswers: UserAnswer[] = [];   // Antworten-Array
  userAnswer: UserAnswer;           // 

  // Zählers
  cntCorrect: number;               // Anzahl richtirer Antworten
  cntUncorrect: number;             // Anzahl falscher Antworten
  cntUnanswered: number;            // Anzahl Fragen ohne Antwort

  constructor(
    private qs: QuestionsService,
    private router: Router
  ) { }


  ngOnInit(): void {
    // ToDo: Random-Fragenpull generieren
    this.questions = this.qs.generateRndQuestionPul();
    
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
    this.cntCorrect = 0;
    this.cntUncorrect = 0;
    this.cntUnanswered = this.questions.length;

    // Aktuelle Frage
    this.curQuestionNumber = 0;
    this.curQuestion = this.questions[this.curQuestionNumber];
  }


//--------------------- Benutzersantwort-Analyse ----------------------------
  /**
   * Benutzer-Antwort prüfen
   */
  chkAnswer() {
    // Setzen alle Variablen auf False
    let isCorrect: boolean = false;
    let isAnswered: boolean = false;
 
    // Überprüfen, ob Antwort gegeben ist
    this.curQuestion.answers?.map(a => {
      // Nehmen wir an, dass die Antwort richtig ist
      isCorrect = true;
      
      // Wenn mindestens einer der Antworten angeklickt => ist Beantwortet
      if(a.givenAnswer) isAnswered = true;

      // Wenn mindestens einer der Antworten falsch ist => ist ganze Frage falsch Beantwortet
      if (a.givenAnswer != a.isCorrect) isCorrect = false;
    });

    // erzeugen Objekt: userAnswer
    this.userAnswer = {
      questionId: this.curQuestion.questionId,
      isAnswered: isAnswered,
      isCorrect: isCorrect
    };

    // Wenn Antwort schon gegeben wurde, überschreiben wir diese im userAnswers
    if (this.userAnswer.isAnswered) {
      for (let i=0; i < this.userAnswers.length; i++) {
        if (this.userAnswers[i].questionId === this.userAnswer.questionId) {
          this.userAnswers[i] = this.userAnswer;
        }
      };
    };
  }

  /**
   * Zählersvariablen berechnen
   */
  updInfo() {
    let cntCorrect: number = 0;
    let cntUncorrect: number = 0;
    let cntUnanswered: number = this.questionsCont;

    // Benutzeranworten-Array durchgehen
    this.userAnswers.map(a => {
      if (!a.isAnswered)      // Wenn antwort nicht gegeben ist
        cntUnanswered--
      else if (!a.isCorrect)  // Wenn antwort gegeben und falsch ist
        cntUncorrect++
      else                    // Wenn antwort gegeben und falsch ist
        cntCorrect++
    });

    // Zählers aktualisieren
    this.cntCorrect = cntCorrect;
    this.cntUncorrect = cntUncorrect;
    this.cntUnanswered = cntUnanswered;
  }



//----------------------- Bottons ---------------------------------
  /**
   * Zurück
   */
  back() {
    // Antwort überprüfen und sie im userAnswers-Array hinzufügen
    this.chkAnswer();

    // Zehlen richtige und falsche Antworten
    this.updInfo();

    if(this.curQuestionNumber > 0)
    {
      this.curQuestionNumber--;
      this.curQuestion = this.questions[this.curQuestionNumber];
    }
  }


  /**
   * Weiter
   */
  next() {
    // Antwort überprüfen und sie im userAnswers-Array hinzufügen
    this.chkAnswer();

    // Zehlen richtige und falsche Antworten
    this.updInfo();
    
    // Zur nächsten Question weiterleiten und Hilfe mit questionsprüfung ausblenden
    if(this.curQuestionNumber < this.questions.length-1)
    {
      this.curQuestionNumber++;
      this.curQuestion = this.questions[this.curQuestionNumber];
    }
  };


  auswerten() {
    // Antwort überprüfen und sie im userAnswers-Array hinzufügen
    this.chkAnswer();

    // Zehlen richtige und falsche Antworten
    this.updInfo();

    // Meldung: OK - zur Auswertung, CANCEL - hier bleiben
    let jain = false;
    if(this.cntUnanswered > 0) {
      jain = confirm ("\nSind Sie sicher?\nSie haben noch unbeantworteten Fragen!");
    };

    console.log('jain ist: ', jain);

    if (jain) {

      // in UserAntworten fügen FragenText hinzu (um schönere FragenAusgabe in Auswertung zu haben)
      this.userAnswers.map(answ => {
        answ.questionId = (answ.questionId + '. ' + this.questions.find(quest => (quest.questionId === answ.questionId))?.questionText);
      });

      // Userantworten schicken zu FS
//      this.fs.getUserAntworten(this.userAntworten);

      console.log('UserAntworten, die zur Auswertung geschickt werden, sind: ', this.userAnswers);

//      this.router.navigate(['', 'auswertung']);
    };    
  }




  /**
   * Hilfsfunktion für Singlechoice-Fragen
   */
  deleteAnswer() {
    this.curQuestion.answers?.map(a => a.givenAnswer=false);
  }
}
