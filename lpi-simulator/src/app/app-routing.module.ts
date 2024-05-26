import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearningModeSettingsComponent } from './learning-mode-settings/learning-mode-settings.component';
import { LearningModeComponent } from './learning-mode/learning-mode.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
