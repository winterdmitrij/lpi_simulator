import { Component, OnInit } from '@angular/core';
import { QuestionStoreService } from '../shared/question-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionType } from '../models/question';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-learning-mode-settings',
  templateUrl: './learning-mode-settings.component.html',
  styleUrls: ['./learning-mode-settings.component.css']
})
export class LearningModeSettingsComponent implements OnInit{
  // Arrays für Ausfallliste
  questionTypes: QuestionType[];   // Array der Fragentypen
  questionNumbers: number[];       // Array der vorangestelten Fragenmengen

  // Reactive Form
  form: FormGroup;

  constructor(
    private qss: QuestionStoreService,  // ToDo: vllt. ändern
    private qs: QuestionsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Formular initialisieren
    this.form = new FormGroup({
      questTypeId: new FormControl('ALL', Validators.required),
      questNumber: new FormControl('10', Validators.required)
    })

    // Arrays aus Fragentypen und Mengen erhalten
    this.questionTypes = this.qss.getAllQuestionTypes();
    this.questionNumbers = this.qss.getAllQuestionNumbers();
  }

  onSubmit() {
    console.log('Submited! ', this.form);
    
    // ToDo: Werte setzen, vllt durch routing
    this.qs.setTypeIdOfQuestions(this.form.value.questTypeId);
    this.qs.setNumberOfQuestions(this.form.value.questNumber);

    console.log(this.form.value.questTypeId);
    console.log(this.form.value.questNumber);
    
    // Routing
    this.router.navigate(['', 'lerning']);
  }
}
