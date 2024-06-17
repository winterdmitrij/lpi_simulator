import { Component, OnInit } from '@angular/core';
import { QuestionTypeService } from '../services/question-types.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionType } from '../models/definitions';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{
  // Arrays für Ausfallliste
  questionsCount: number;          // Anzahl der Fragen insgesamt
  questionCounts: number[];       // Array der vorangestelten Fragenmengen
  pageNumbers: number[];          // Array der möglichen Seten

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
      questCount: new FormControl('10', Validators.required),
      pageNumber: new FormControl('1', Validators.required)
    });

    // Fragenmengen- und Seitennummern-Arrays erhalten
    this.questionsCount = this.qs.getAllQuestionsCount();
    this.questionCounts = this.qts.getAllQuestionNumbers();
    this.pageNumbers = this.qts.getPagesArrayBy(this.questionsCount, this.form.value.questCount);
  }

  onSubmit() {
    // Zum Training weiterleiten, mit TypeId, Count und Page als QueryParams
    this.router.navigate(
      ['/training'],
      {
        queryParams: {
          count: this.form.value.questCount,
          page: this.form.value.pageNumber,
          num: 1
        } 
      }
    );
  }

  getPageNumbers(): number[]{
    return this.pageNumbers = this.qts.getPagesArrayBy(this.questionsCount, this.form.value.questCount);
  }

  onChange() {
    this.pageNumbers = this.getPageNumbers();
  }
}