import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionStoreService } from './shared/question-store.service';
import { LearningModeSettingsComponent } from './learning-mode-settings/learning-mode-settings.component';
import { LearningModeComponent } from './learning-mode/learning-mode.component';
import { PartialExamModeComponent } from './partial-exam-mode/partial-exam-mode.component';
import { FullExamModeComponent } from './full-exam-mode/full-exam-mode.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearningModeSettingsComponent,
    LearningModeComponent,
    PartialExamModeComponent,
    FullExamModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [QuestionStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
