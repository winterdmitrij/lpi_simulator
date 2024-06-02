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
  questionTypes: QuestionType[];  // Array der Fragentypen
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
      questTypeId: new FormControl('ALL', Validators.required),
      questCount: new FormControl('10', Validators.required),
      pageNumber: new FormControl('1', Validators.required)
    })

    // Arrays aus Fragentypen und Mengen erhalten
    this.questionTypes = this.qts.getAllQuestionTypes();
    this.questionCounts = this.qts.getAllQuestionNumbers();
    this.pageNumbers = this.getPageNumbers();
  }

  onSubmit() {
    // Zum Training weiterleiten, mit TypeId, Count und Page als QueryParams
    this.router.navigate(
      ['/training', this.form.value.questTypeId],
      {
        queryParams: {
          count: this.form.value.questCount,
          page: this.form.value.pageNumber
        } 
      }
    );
  }

  getPageNumbers(): number[]{
    // Fragenanzahl ermitteln
    let allQuestionCount: number = this.qs.getQuestionsCountBy(this.form.value.questTypeId);
    //console.log('Test Fragenanzahl:', allQuestionCount);
    
    // Seitenanzahl ermitteln
    let pageCount: number = Math.ceil(allQuestionCount / this.form.value.questCount);
    //console.log('Test Seitenanzahl: ', pageCount);
    
    return this.qts.getAllPageNumbersBy(pageCount);
  }

  onChange() {
    this.pageNumbers = this.getPageNumbers();
  }
}