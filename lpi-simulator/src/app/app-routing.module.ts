import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearningModeSettingsComponent } from './learning-mode-settings/learning-mode-settings.component';
import { LearningModeComponent } from './learning-mode/learning-mode.component';
import { PartialExamModeComponent } from './partial-exam-mode/partial-exam-mode.component';
import { FullExamModeComponent } from './full-exam-mode/full-exam-mode.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'settings',
    component: LearningModeSettingsComponent
  },
  {
    path: 'lerning',
    component: LearningModeComponent
  },
  {
    path: 'partial',
    component: PartialExamModeComponent
  },
  {
    path: 'full-exam',
    component: FullExamModeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
