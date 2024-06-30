import { Component, OnInit } from '@angular/core';
import { QuestionTypeService } from '../services/question-types.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Page, QuestionType, QuestionsPull } from '../models/definitions';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{
  // Arrays für Ausfallliste
  questionsPull: QuestionsPull[]; // Fragenpull
  questionsCount: number;         // Anzahl der Fragen insgesamt
  questionCounts: number[];       // Array der vorangestelten Fragenmengen
//  pageNumbers: number[];          // ALT: Array der möglichen Seten
  pages: Page[];                  // NEW: Array der möglichen Seten


  // Reactive Form
  form: FormGroup;

  constructor(
    private qts: QuestionTypeService,
    private qs: QuestionsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // ReactiveForm initialisieren
    this.form = new FormGroup({
      questionsPull: new FormControl('MQ', Validators.required),
      questCount: new FormControl('10', Validators.required),
//      pageNumber: new FormControl('1', Validators.required),     //??
      page: new FormControl(1, Validators.required)
    });

    // Fragenmengen- und Seitennummern-Arrays erhalten
    this.questionsPull = this.qts.getAllQuestionsPulls();
    this.questionsCount = this.qs.getAllQuestionsCount(this.form.value.questionsPull);   // Fragen Anzahl
    this.questionCounts = this.qts.getAllQuestionNumbers();
//    this.pageNumbers = this.qts.getPagesArrayBy(this.questionsCount, this.form.value.questCount); //??
    this.pages = this.qts.getPagesBy(this.questionsCount, this.form.value.questCount);
  }

  onSubmit() {
    // Zum Training weiterleiten, mit TypeId, Count und Page als QueryParams
    this.router.navigate(
      ['/training'],
      {
        queryParams: {
          quest: this.form.value.questionsPull,
          count: this.form.value.questCount,
          page: this.form.value.page,
          num: 1
        } 
      }
    );

    console.log(this.form.value);
    
  }

//  getPageNumbers(): number[]{
//    return this.pageNumbers = this.qts.getPagesArrayBy(this.questionsCount, this.form.value.questCount);
//  }

  onChangePull() {
    this.questionsCount = this.qs.getAllQuestionsCount(this.form.value.questionsPull);
//   this.pageNumbers = this.getPageNumbers();
    this.pages = this.qts.getPagesBy(this.questionsCount, this.form.value.questCount);
  }

  onChangeCount() {
//    this.pageNumbers = this.getPageNumbers();
    this.pages = this.qts.getPagesBy(this.questionsCount, this.form.value.questCount);
  }
}