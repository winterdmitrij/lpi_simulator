import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionTypeService } from './services/question-types.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionsService } from './services/questions.service';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './settings/settings.component';
import { TrainingComponent } from './training/training.component';
import { HalfExamComponent } from './half-exam/half-exam.component';
import { ExamComponent } from './exam/exam.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    TrainingComponent,
    HalfExamComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    QuestionTypeService,
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
