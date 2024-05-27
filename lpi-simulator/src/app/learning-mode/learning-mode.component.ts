import { Component, OnInit } from '@angular/core';
import { Question, UserAnswer } from '../shared/question';
import { QuestionStoreService } from '../shared/question-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learning-mode',
  templateUrl: './learning-mode.component.html',
  styleUrls: ['./learning-mode.component.css']
})
export class LearningModeComponent implements OnInit{
  // um randome questionspull zu erstellen
  questionTypeId?: string;
  questionNumber?: number;
  questions: Question[] = [];
  curQuestionNumber: number = 0;  // Nummer der akt. Frage
  curQuestion?: Question;


  // um Antwort zu prüfen
  userAnswers: UserAnswer[] = [];
  userAnswer?: UserAnswer;
  isAnswered?: boolean;
  isCorrect?: boolean;

  correctNum: number = 0;   // Anzahl richtirer Antworten
  incorrectNum: number = 0; // Anzahl falscher Antworten
  unansweredNum?: number;   // Anzahl Fragen ohne Antwort


  // für NavigationsTasten
  nextDis: boolean = false; // ???
  show: boolean = false;
  exam: boolean = false;

  constructor(
    private qss: QuestionStoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // um Hilfe und richtige Antwort anzuzeigen
    this.show = false;
    this.exam = false;

    // ToDo: den übergebenen Fragenanzahl und -Typen erhalten (RICHTIG LÖSEN)
    this.questionTypeId = this.qss.questionTypeId;
    this.questionNumber = this.qss.questionNumber;
    this.questions = this.generateRndQuestionPul();

    /*
    // füllen Userantworten mit questionsId und falschen Antworten
    this.questions.map(fr => {
      this.userAnswers.push(this.userAnswer = {
        QuestionId: fr.QuestionId,
        isAnswered: false,
        isCorrect: false
      })
    });

    // um gegebenen Antworten zu überprüfen und richtigen/falschen zu zählen
    this.questions.filter(fr => fr.QuestionTyp != "FI").map(Question => Question.antworten.map(antwort => antwort.gegebeneAntwort = false));
    this.questions.filter(fr => fr.QuestionTyp == "FI").map(Question => Question.antwort.gegebeneAntwort = "");
    this.correctNum = 0;
    this.incorrectNum = 0;
    this.unansweredNum = this.questions.length;
*/
    // fangen mit 1.Question an
    this.curQuestionNumber = 0;
    this.curQuestion = this.questions[this.curQuestionNumber];
  }

// erstellen Random-questionspul
  // ToDo: Fragentyp und -Anzahl als Übergabeparameter mit ReturnWert: questions[]
  generateRndQuestionPul() {
    let rndIdx: number;
    let tempQuestions = this.qss.getAllQuestions();
    
    this.questions = [];
    
    if (this.questionTypeId == "ALL") {
      tempQuestions;
    }
    else
    {
      tempQuestions = tempQuestions.filter(q => q.questionTypeId === this.questionTypeId);
    };

    // Randome Reihenfolge aus tmp-Fragen generieren
    while ( tempQuestions.length > 0 ) {
      rndIdx = Math.floor((Math.random() * tempQuestions.length));
      this.questions.push(tempQuestions[rndIdx]);
      tempQuestions.splice(rndIdx, 1);                            // tmp-Fragenarray kürzen
    };

    // Fragenarray abschneiden und prüfen
    this.questions = this.questions.slice(0, this.questionNumber);
    //console.log('questionspul-Kontrolle. questionsPullLänge: ', this.questions.length, ', und besteht aus: ', this.questions);

    return this.questions; 
  }

  /*
  // um gegebene Antwort in UserAntworten[] hinzuzufügen
  userAntwortKontrolle() {
    this.isCorrect = false;
    this.isAnswered = false;

    // Überprüfen, ob Antwort gegeben ist
    if (this.curQuestion.QuestionTyp === "FI" && this.curQuestion.antwort.gegebeneAntwort !== "") {
      this.isAnswered = true;
      if (this.curQuestion.antwort.antwortText.includes(this.curQuestion.antwort.gegebeneAntwort)) {
        this.isCorrect = true;
      };
    }
    else if (this.curQuestion.QuestionTyp !== "FI") {
      this.curQuestion.antworten.map(a => {
        if(a.gegebeneAntwort) {
          this.isAnswered = true;
          this.isCorrect = true;
          this.curQuestion.antworten.map(a => {if(a.gegebeneAntwort != a.isCorrect) this.isCorrect = false});
        };
      });
    };

    // erzeugen Objekt: userAnswer
    this.userAnswer = {
      QuestionId: this.curQuestion.QuestionId,
      isAnswered: this.isAnswered,
      isCorrect: this.isCorrect
    };

    // Wenn Antwort schon gegeben wurde, überschreiben wir diese im userAnswers (vielleicht Antwort wurde geändert)
    if (this.userAnswer.isAnswered) {
      for (let i=0; i < this.userAnswers.length; i++) {
        if (this.userAnswers[i].QuestionId === this.userAnswer.QuestionId) {
          this.userAnswers[i] = this.userAnswer;
        }
      };
    };
  }
*/
/*
  // berechnet richtige, falsche und unbeantwortete questions im questionspul
  countAntworten () {
    let countR: number = 0;
    let countF: number = 0;

    // Richtige und falsche Antworten zehlen
    this.userAnswers.map(a => {
      if (a.isAnswered && !a.isCorrect)
        countF++
      else if (a.isAnswered && a.isCorrect)
        countR++
    });
    this.correctNum = countR;
    this.incorrectNum = countF;
    this.unansweredNum = this.questions.length - countR - countF;
  }
*/

  // Navigation-Tasten
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

  home() {
    this.router.navigate(['', 'home']);
  }

  forward() {
    // Antwort überprüfen und sie im userAnswers-Array hinzufügen
 /*   this.userAntwortKontrolle();

    // Zehlen richtige und falsche Antworten
    this.countAntworten();
    
    // Zur nächsten Question weiterleiten und Hilfe mit questionsprüfung ausblenden
    if(this.curQuestionNumber < this.questions.length-1)
    {
      this.curQuestionNumber++;
      this.curQuestion = this.questions[this.curQuestionNumber];
      this.exam = false;
      this.show = false;
    }
    else {
      if(this.unansweredNum > 0) {
        alert("\nSie haben noch unbeantworteten questions!");
      }
      else if (this.incorrectNum > 0) {
        alert("\nEs gibt noch questions, an die Sie noch arbeiten müssen,\nbevor mit dem Prüfmodus anfangen.");
      }
      else {
        alert("\nGratiliere!\nSie haben alle questions erfolgreich durchgearbeitet.\nJetzt können Sie mit dem Prüfmodus anfangen.");
      };
      // disabled für taste "forward"
      this.nextDis = true;
    };*/
  }


  // Zeigtt Hilfe an
  showHelp() {
    this.show = !this.show;
  }

  // Zeigt an, ob gegebenen Antwort correctNum oder incorrectNum ist
  checkAnswer() {
  /*
    if (this.curQuestion.questionId==="FI") this.antwClass();
    this.exam = !this.exam;
  */
  }

  // Hilqssmethoden
  // für richtige .html-Ausgabe von S-C-questions
  deleteAnswer() {
    this.curQuestion?.answers?.map(a => a.givenAnswer=false);
  }

  /*
  // für richtige .html-Ausgabe von F-I-questions
  antwClass(): string {
    if (this.curQuestion.antwort.antwortText.includes(this.curQuestion.antwort.gegebeneAntwort)) {
      return "correctNum"
    }
    else {
      return "fehler";
    };
  }
  */
}
