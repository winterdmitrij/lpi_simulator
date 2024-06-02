import { Component, Input, OnInit } from '@angular/core';
import { Question, UserAnswer } from '../models/definitions';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit{
  // Variablen von EinstellungsSeite            // ToDo: vllt. mit @Input
  typeIdOfQuestions: string;      // Fragentyp
  numberOfQuestions: number;      // Fragenmenge
  pageNumber: number;             // Seitennummer
  
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
  show: boolean;                  // Hilfe anzeigen
  exam: boolean;                  // Antwort prüfen
  nextDisable: boolean;           // Taste Next-Disable

  constructor(
    private qs: QuestionsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Flags
    this.show = false;
    this.exam = false;
    this.nextDisable = false;

    // Variablen aus Adresszeile dynamisch ablesen
    this.route.params.subscribe((params: Params) => {
      this.typeIdOfQuestions = params['typeId']
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.numberOfQuestions = +params['count'],
      this.pageNumber = +params['page']
    });

  
    // Fragenpull generieren
    this.questions = this.qs.generateQuestionsBy(this.typeIdOfQuestions, this.numberOfQuestions, this.pageNumber);
    
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

//--------------------- Benutzersantwort-Analyse ----------------------------
  /**
   * Benutzer-Antwort prüfen
   */
  chkAnswer() {
    // Setzen alle Variablen auf False
    this.isCorrect = false;
    this.isAnswered = false;
 
    // Überprüfen, ob Antwort gegeben ist
    this.curQuestion.answers?.map(a => {
      // Nehmen wir an, dass die Antwort richtig ist
      this.isCorrect = true;
      
      // Wenn mindestens einer der Antworten angeklickt => ist Beantwortet
      if(a.givenAnswer) this.isAnswered = true;

      // Wenn mindestens einer der Antworten falsch ist => ist ganze Frage falsch Beantwortet
      if (a.givenAnswer != a.isCorrect) this.isCorrect = false;
    });

    // erzeugen Objekt: userAnswer
    this.userAnswer = {
      questionId: this.curQuestion.questionId,
      isAnswered: this.isAnswered,
      isCorrect: this.isCorrect
    };

    // Wenn Antwort schon gegeben wurde, überschreiben wir diese im userAnswers
    if (this.userAnswer.isAnswered) {
      for (let i=0; i < this.userAnswers.length; i++) {
        if (this.userAnswers[i].questionId === this.userAnswer.questionId) {
          this.userAnswers[i] = this.userAnswer;
        }
      };
    };

    // Test der Benutzer-Antworten
//    console.log(this.userAnswers);
  }

  /**
   * Zählersvariablen berechnen
   */
  updInfo() {
    let cntCorrect: number = 0;
    let cntUncorrect: number = 0;
    let cntUnanswered: number = this.numberOfQuestions;

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
    this.numOfCorrect = cntCorrect;
    this.numOfUncorrect = cntUncorrect;
    this.numOfUnanswered = cntUnanswered;
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
      this.exam = false;
      this.show = false;
      this.nextDisable = false;
    }
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
    // Antwort überprüfen und sie im userAnswers-Array hinzufügen
    this.chkAnswer();

    // Zehlen richtige und falsche Antworten
    this.updInfo();
    
    // Zur nächsten Question weiterleiten und Hilfe mit questionsprüfung ausblenden
    if(this.curQuestionNumber < this.questions.length-1)
    {
      this.curQuestionNumber++;
      this.curQuestion = this.questions[this.curQuestionNumber];
      this.exam = false;
      this.show = false;
    }
    else
      this.nextDisable = true;  // disabled für taste "next"
  };

  /**
   * Hilfe anzeigen
   */
  showHelp() {
    this.show = !this.show;
  };
  
  /**
   * Richtige Antwort(en) anzeigen
   */
  showAnswer() {
    this.exam = !this.exam;
  };
  
  /**
   * Hilfsfunktion für Singlechoice-Fragen
   */
  deleteAnswer() {
    this.curQuestion.answers?.map(a => a.givenAnswer=false);
  }
}