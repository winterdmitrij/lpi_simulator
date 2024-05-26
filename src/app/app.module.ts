import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LernmodusComponent } from './lernmodus/lernmodus.component';
import { HomeComponent } from './home/home.component';
import { LernmodusEinstellungenComponent } from './lernmodus-einstellungen/lernmodus-einstellungen.component';
import { FormsModule } from '@angular/forms';
import { TeilPruefModusComponent } from './teil-pruef-modus/teil-pruef-modus.component';
import { VollPruefModusComponent } from './voll-pruef-modus/voll-pruef-modus.component';
import { FrageStoreService } from './shared/frage-store.service';
import { AuswertungComponent } from './auswertung/auswertung.component';

@NgModule({
  declarations: [
    AppComponent,
    LernmodusComponent,
    HomeComponent,
    LernmodusEinstellungenComponent,
    TeilPruefModusComponent,
    VollPruefModusComponent,
    AuswertungComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FrageStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
