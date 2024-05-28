import { Component, Input, OnInit } from '@angular/core';
import { Question, UserAnswer } from '../models/question';
import { QuestionStoreService } from '../shared/question-store.service';
import { Router } from '@angular/router';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-learning-mode',
  templateUrl: './learning-mode.component.html',
  styleUrls: ['./learning-mode.component.css']
})
export class LearningModeComponent implements OnInit{
  // Fragenpull ermitteln
  questions: Question[] = [];

  // ToDo: Die Werte, die aus Lerneinstellungen
  typeIdOfQuestions: string;   // Fragentyp
  numberOfQuestions: number;   // Fragenmenge


  // um randome questionspull zu erstellen
  curQuestionNumber: number = 0;  // Nummer der akt. Frage
  curQuestion: Question;

  // um Antwort zu prüfen
  userAnswers: UserAnswer[] = [];
  userAnswer: UserAnswer;
  isAnswered?: boolean;
  isCorrect?: boolean;

  // Zellers
  numOfCorrect: number = 0;   // Anzahl richtirer Antworten
  numOfUncorrect: number = 0; // Anzahl falscher Antworten
  numOfUnanswered: number;    // Anzahl Fragen ohne Antwort


  // für NavigationsTasten
  nextDis: boolean = false; // == Disable für Taste Next
  show: boolean = false;
  exam: boolean = false;

  constructor(
    private qss: QuestionStoreService,
    private qs: QuestionsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // um Hilfe und richtige Antwort anzuzeigen
    this.show = false;
    this.exam = false;

    // ToDo: Fragenanzahl und -Typen erhalten (RICHTIG LÖSEN)
    this.typeIdOfQuestions = this.qs.getTypeIdOfQuestions();
    this.numberOfQuestions = this.qs.getNumberOfQuestions();

    //console.log("Anzahl: ", this.numberOfQuestions);

    this.questions = this.generateRndQuestionPul();
    //console.log("rnd-Fragen: ", this.questions);
    
    // füllen Userantworten mit questionsId und falschen Antworten
    this.questions.map(fr => {
      this.userAnswers.push(this.userAnswer = {
        questionId: fr.questionId,
        isAnswered: false,
        isCorrect: false
      })
    });

    // Zellers
    this.numOfUnanswered = this.questions.length;
    this.questions.map(quest => quest.answers?.map(answ => answ.givenAnswer = false));


    // fangen mit 1.Question an
    this.curQuestionNumber = 0;
    this.curQuestion = this.questions[this.curQuestionNumber];
  }

  /**
   * Random-Fragepul generieren
   * @returns 
   */
  generateRndQuestionPul(): Question[] {
    let rndIdx: number;
    let tmpQuestions: Question[] = this.qs.getQuestionsBy(this.typeIdOfQuestions);
    let rndQuestions: Question[] = [];

    // Randome Reihenfolge aus tmp-Fragen generieren
    while ( tmpQuestions.length > 0 ) {
      rndIdx = Math.floor((Math.random() * tmpQuestions.length));
      rndQuestions.push(tmpQuestions[rndIdx]);
      tmpQuestions.splice(rndIdx, 1);                            // tmp-Fragenarray kürzen
    };
    
    // Fragenpull abschneiden und prüfen
    rndQuestions = rndQuestions.slice(0, this.numberOfQuestions);

    return rndQuestions; 
  }

  
//--------------------- Benutzersantwort-Analyse ----------------------------
  /**
   * Benutzer-Antwort prüfen
   * ToDo: Name ändern
   */
  userAntwortKontrolle() {
    this.isCorrect = false;
    this.isAnswered = false;

    // Überprüfen, ob Antwort gegeben ist
    this.curQuestion.answers?.map(a => {
      if(a.givenAnswer) {
        this.isAnswered = true;
        this.isCorrect = true;
        this.curQuestion?.answers?.map(a => {if(a.givenAnswer != a.isCorrect) this.isCorrect = false});
      };
    });

    // erzeugen Objekt: userAnswer
    this.userAnswer = {
      questionId: this.curQuestion.questionId,
      isAnswered: this.isAnswered,
      isCorrect: this.isCorrect
    };

    // Wenn Antwort schon gegeben wurde, überschreiben wir diese im userAnswers (vielleicht Antwort wurde geändert)
    if (this.userAnswer.isAnswered) {
      for (let i=0; i < this.userAnswers.length; i++) {
        if (this.userAnswers[i].questionId === this.userAnswer.questionId) {
          this.userAnswers[i] = this.userAnswer;
        }
      };
    };
  }

  /**
   * Richtige und Falsche Antworten berechnen
   */
  checkAnswer() {
    let countR: number = 0;
    let countF: number = 0;

    // Richtige und falsche Antworten zehlen
    this.userAnswers.map(a => {
      if (a.isAnswered && !a.isCorrect)
        countF++
      else if (a.isAnswered && a.isCorrect)
        countR++
    });
    this.numOfCorrect = countR;
    this.numOfUncorrect = countF;
    this.numOfUnanswered = this.questions.length - countR - countF;
  }


//----------------------- Bottons ---------------------------------
  /**
   * Zurück
   */
  back() {
    if(this.curQuestionNumber > 0)
    {
      this.curQuestionNumber--;
      this.curQuestion = this.questions[this.curQuestionNumber];
      this.exam = false;
      this.show = false;
      this.nextDis = false;
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
  forward() {
    // Antwort überprüfen und sie im userAnswers-Array hinzufügen
    this.userAntwortKontrolle();

    // Zehlen richtige und falsche Antworten
    this.checkAnswer();
    
    // Zur nächsten Question weiterleiten und Hilfe mit questionsprüfung ausblenden
    if(this.curQuestionNumber < this.questions.length-1)
    {
      this.curQuestionNumber++;
      this.curQuestion = this.questions[this.curQuestionNumber];
      this.exam = false;
      this.show = false;
    }

    // disabled für taste "forward"
    this.nextDis = true;
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