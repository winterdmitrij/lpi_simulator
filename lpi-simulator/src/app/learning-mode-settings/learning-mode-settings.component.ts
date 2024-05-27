import { Component } from '@angular/core';
import { QuestionStoreService } from '../shared/question-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionType } from '../shared/question';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-learning-mode-settings',
  templateUrl: './learning-mode-settings.component.html',
  styleUrls: ['./learning-mode-settings.component.css']
})
export class LearningModeSettingsComponent {
  questionNumber?: number;
  questionNumbers?: number[];
  curQuestionNumber: number = 10;

  questionTypeId?: string;
  questionTypes?: QuestionType[];
  curQuestionTypeId = "ALL";
  curQuestionType?: QuestionType;

  constructor(
    private qss: QuestionStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Arrays aus Fragentypen und Mengen erhalten
    this.questionTypes = this.qss.getAllQuestionTypes();
    this.questionNumbers = this.qss.getAllQuestionNumbers();

    this.onQuestionTypeChange();
    // console.log(this.curQuestionType);

    // this.qss.getquestionTypes().subscribe((questionTypes: questionType[]) => (this.questionTypes = questionTypes))
  }


  onSubmit(form: NgForm) {
    // Validierung, ist eigentlich unnötig
    let {curQuestionTypeId, questionNumber} = form.value;
    if (questionNumber == 0) questionNumber = 5;
    if (questionNumber < 0) questionNumber *= -1;
    
    if (curQuestionTypeId == null) curQuestionTypeId = 'ALL'
    
    // Werte ablesen
    this.qss.getQuestionTypeId(curQuestionTypeId);
    this.qss.getQuestionNumber(questionNumber);
    
    // Werten-Prüfung
    // console.log('Form: ', form);
    //console.log(form.value);

    // Routing
    this.router.navigate(['', 'lerning']);
  }

  onQuestionTypeChange() {
    this.curQuestionType = this.questionTypes?.find(qt => qt.id === this.curQuestionTypeId);
  }
}
