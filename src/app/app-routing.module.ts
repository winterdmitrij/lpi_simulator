import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuswertungComponent } from './auswertung/auswertung.component';
import { HomeComponent } from './home/home.component';
import { LernmodusEinstellungenComponent } from './lernmodus-einstellungen/lernmodus-einstellungen.component';
import { LernmodusComponent } from './lernmodus/lernmodus.component';
import { TeilPruefModusComponent } from './teil-pruef-modus/teil-pruef-modus.component';
import { VollPruefModusComponent } from './voll-pruef-modus/voll-pruef-modus.component';

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
    path: 'einstellungen',
    component: LernmodusEinstellungenComponent
  },
  {
    path: 'lernmodus',
    component: LernmodusComponent
  },
  {
    path: 'teil-pruefung',
    component: TeilPruefModusComponent
  },
  {
    path: 'voll-pruefung',
    component: VollPruefModusComponent
  },
  {
    path: 'auswertung',
    component: AuswertungComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
