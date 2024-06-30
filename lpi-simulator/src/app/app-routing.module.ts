import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { TrainingComponent } from './training/training.component';
import { HalfExamComponent } from './half-exam/half-exam.component';
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
    path: 'training/set',
    component: SettingsComponent,
  },
  {
    path: 'training',
    component: TrainingComponent
  },
  {
    path: 'half-exam',
    component: HalfExamComponent
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
