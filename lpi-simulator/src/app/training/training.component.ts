import { Component, Input, OnInit } from '@angular/core';
import { Question, QuestionsPull, UserAnswer } from '../models/definitions';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuestionsService } from '../services/questions.service';
import { QuestionTypeService } from '../services/question-types.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit{
  // Query-Parameter
  questionsPullId: string;        // Pragenpull-ID
  questionsCount: number;         // Fragenmenge
  pageNum: number;                // Seitennummer
  
  curQuestionNumber: number;      // Reihennummer der aktuellen Frage
  
  // Fragen-Array
  questions: Question[] = [];     // Fragen-Array
  curQuestion: Question;          // Die aktuele Frage des Fragenpulls

  // Benutzer-Antworten ??
  userAnswers: UserAnswer[] = []; // Antworten-Array
  userAnswer: UserAnswer;         // ??
  isAnswered?: boolean;           // ??
  isCorrect?: boolean;            // ??

  // Zählers +
  correctsCount: number;          // Anzahl richtirer Antworten
  uncorrectsCount: number;        // Anzahl falscher Antworten
  unansweredCount: number;        // Anzahl Fragen ohne Antwort

  // Flags
  show: boolean;                  // Hilfe anzeigen
  exam: boolean;                  // Antwort prüfen
  nextDisable: boolean;           // Taste Next-Disable ?????

  constructor(
    private qs: QuestionsService,
//    private qts: QuestionTypeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    // Flags
    this.show = false;
    this.exam = false;
    this.nextDisable = false;
    
    // Parameters der Adresszeile ablesen
    this.route.queryParams.subscribe((params: Params) => {
      this.questionsPullId = params['quest']
      this.questionsCount = +params['count'],
      this.pageNum = +params['page'],
      this.curQuestionNumber = +params['num']-1
    });

    // Fragen-Array erhalten
    this.questions = this.qs.getQuestionsBy(this.questionsPullId, this.questionsCount, this.pageNum);

    // Fragen-Array durchgehen und
    this.questions.map(quest => {

      // Antworten-Array erstellen und befüllen mit:
      this.userAnswers.push(this.userAnswer = {
        questionId: quest.questionId,     // Frage-ID
        isAnswered: false,                // ist noch unbeantwortet
        isCorrect: false                  // ist falsch
      });

      // - Gegebene Antworten aus dem Fragenpull leeren
      quest.answers?.map(answ => answ.givenAnswer = false);   // Alle Antwortsvarianten als nichtgegebene markiert
    });

    // Zählers
    this.correctsCount = 0;
    this.uncorrectsCount = 0;
    this.unansweredCount = this.questions.length;

    // Navigieren zur aktuellen Frage
    this.toCurQuestion();
  }


//----------------------- Buttons ---------------------------------
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
    this.curQuestion.answers?.map(answ => answ.givenAnswer=false);
  }


//----------------------- Navigation ---------------------------------
  /**
   * Routing zur aktuellen Frage
   */
  toCurQuestion(){
    this.curQuestion = this.questions[this.curQuestionNumber];
    this.show = false;
    this.exam = false;

    this.router.navigate(
      ['/training'], // this.curQuestion.questionId],
      {
        queryParams: {
          quest: this.questionsPullId,
          count: this.questionsCount,
          page: this.pageNum,
          num: this.curQuestionNumber+1
        } 
      }
    );
  }


  /**
   * Routing zur vorherigen Frage
   */  
  toPrev() {
    // Antwort überprüfen
    this.chkAnswer();

    if(this.curQuestionNumber > 0)
    {
      this.curQuestionNumber--;
    }
    this.toCurQuestion();
  }


  /**
   * Routing zur Frage, bzgl.:
   * @param inpageNum  Index der Frage
   */
  toPage(inpageNum: number) {
    this.curQuestionNumber = inpageNum;
    this.toCurQuestion();
  }

  /**
   * Routing zur nächsten Frage
   */  
  toNext() {
    // Antwort überprüfen
    this.chkAnswer();

    // Zur nächsten Question weiterleiten und Hilfe mit questionsprüfung ausblenden
    if(this.curQuestionNumber < this.questionsCount - 1)
    {
      this.curQuestionNumber++;
    }
    this.toCurQuestion();
  };


//--------------------- Benutzersantwort-Analyse ----------------------------
  /**
   * Benutzer-Antwort prüfen
   */
  chkAnswer() {
    let idx: number;
    this.isCorrect = true;
    this.isAnswered = false;

    // Überprüfen, ob Antwort gegeben ist
    this.curQuestion.answers?.map(a => {
      // Wenn mindestens einer der Antworten angeklickt => ist Beantwortet
      if(a.givenAnswer) this.isAnswered = true;

      // Wenn mindestens einer der Antworten falsch ist => ist ganze Frage falsch Beantwortet
      if (a.givenAnswer != a.isCorrect) this.isCorrect = false;
    });

    // erzeugen Objekt: userAnswer
    this.userAnswer = {
      questionNum: this.curQuestionNumber,
      questionId: this.curQuestion.questionId,
      isAnswered: this.isAnswered,
      isCorrect: this.isCorrect
    };

    // Aktualisieren der Benutzer Antwort
    idx = this.userAnswers.findIndex(answ => answ.questionId === this.curQuestion.questionId);
    this.userAnswers[idx].isAnswered = this.isAnswered;
    this.userAnswers[idx].isCorrect = this.isCorrect;

    // Aktualisieren den Informationspanel
    this.updInfo();
  }

  /**
   * Zählersvariablen berechnen
   */
  updInfo() {
    this.correctsCount = this.userAnswers.filter(answ => answ.isAnswered && answ.isCorrect).length;
    this.uncorrectsCount = this.userAnswers.filter(answ => answ.isAnswered && !answ.isCorrect).length;
    this.unansweredCount = this.userAnswers.filter(answ => !answ.isAnswered).length;
  }

}