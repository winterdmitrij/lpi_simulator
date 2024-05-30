import { Component, OnInit } from '@angular/core';
import { QuestionTypeService } from '../services/question-types.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionType } from '../models/definitions';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-learning-mode-settings',
  templateUrl: './learning-mode-settings.component.html',
  styleUrls: ['./learning-mode-settings.component.css']
})
export class LearningModeSettingsComponent implements OnInit{
  // Arrays für Ausfallliste
  questionTypes: QuestionType[];  // Array der Fragentypen
  questionCounts: number[];       // Array der vorangestelten Fragenmengen
  pageNumbers: number[];          // Array der möglichen Seten

  // Reactive Form
  form: FormGroup;

  constructor(
    private qts: QuestionTypeService,
    private qs: QuestionsService,
    private route: ActivatedRoute,
    private router: Router
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
    // ToDo: Werte setzen, vllt durch routing
    this.qs.setTypeIdOfQuestions(this.form.value.questTypeId);
    //console.log(this.form.value.questTypeId);
    
    this.qs.setCountOfQuestions(this.form.value.questCount);
    //console.log(this.form.value.questCount);
    
    this.qs.setPageNumber(this.form.value.pageNumber);

    // Routing ToDo: reactive Routing
    this.router.navigate(['', 'lerning']);
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