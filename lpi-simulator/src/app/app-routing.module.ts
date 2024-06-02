import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { TrainingComponent } from './training/training.component';
import { PartialExamComponent } from './partial-exam/partial-exam.component';
import { ExamComponent } from './exam/exam.component';

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
    path: 'training',
    component: SettingsComponent,
  },
  {
    path: 'training/:typeId',
    component: TrainingComponent
  },
  {
    path: 'part-exam',
    component: PartialExamComponent
  },
  {
    path: 'exam',
    component: ExamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
