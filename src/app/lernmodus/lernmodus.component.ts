import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FrageStoreService } from '../shared/frage-store.service';
import { Frage, UserAntwort } from '../shared/frage';

@Component({
  selector: 'app-lernmodus',
  templateUrl: './lernmodus.component.html',
  styleUrls: ['./lernmodus.component.css']
})
export class LernmodusComponent implements OnInit {

  // um randome Fragenpull zu erstellen
  fragenTyp: string;
  fragenAnzahl: number;
  fragen: Frage[] = [];
  aktNummer: number;
  aktFrage: Frage;

  // um Antwort zu prüfen
  userAntworten: UserAntwort[] = [];
  userAntwort: UserAntwort;
  istBeantwortet: boolean;
  istRichtig: boolean;
  richtig; falsch: number;
  unbeantworten: number;

  // für NavigationsTasten
  nextDis: boolean = false;
  zeig: boolean;
  pruef: boolean;

  constructor(
    private fs: FrageStoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // um Hilfe und richtige Antwort anzuzeigen
    this.zeig = false;
    this.pruef = false;

    // bekommen RandomFragePul mit X-FA und Y-FT
    this.fragenTyp = this.fs.fragenTyp;
    this.fragenAnzahl = this.fs.fragenAnzahl;
    this.fragen = this.randomFragenPul();
    
    // füllen Userantworten mit FragenId und falschen Antworten
    this.fragen.map(fr => {
      this.userAntworten.push(this.userAntwort = {
        frageId: fr.frageId,
        istBeantwortet: false,
        istRichtig: false
      })
    });

    // um gegebenen Antworten zu überprüfen und richtigen/falschen zu zählen
    this.fragen.filter(fr => fr.frageTyp != "FI").map(frage => frage.antworten.map(antwort => antwort.gegebeneAntwort = false));
    this.fragen.filter(fr => fr.frageTyp == "FI").map(frage => frage.antwort.gegebeneAntwort = "");
    this.richtig = 0;
    this.falsch = 0;
    this.unbeantworten = this.fragen.length;

    // fangen mit 1.Frage an
    this.aktNummer = 0;
    this.aktFrage = this.fragen[this.aktNummer];
  }

  // erstellen Random-Fragenpul
  randomFragenPul() {
    this.fragen = [];
    let tempFragen = this.fs.getAll();
    let rnd: number;

    if (this.fragenTyp == "ALL") {
      tempFragen;
    }
    else
    {
      tempFragen = tempFragen.filter(frage => frage.frageTyp === this.fragenTyp);
    };

    while ( tempFragen.length > 0 ) {
      rnd = Math.floor((Math.random() * tempFragen.length));
      this.fragen.push(tempFragen[rnd]);
      tempFragen.splice(rnd, 1);
    };

    this.fragen = this.fragen.slice(0, this.fragenAnzahl);
    console.log('Fragenpul-Kontrolle. FragenPullLänge: ', this.fragen.length, ', und besteht aus: ', this.fragen);

    return this.fragen;
  }

  // um gegebene Antwurt in UserAntworten[] hinzuzufügen
  userAntwortKontrolle() {
    this.istRichtig = false;
    this.istBeantwortet = false;

    // Überprüfen, ob Antwort gegeben ist
    if (this.aktFrage.frageTyp === "FI" && this.aktFrage.antwort.gegebeneAntwort !== "") {
      this.istBeantwortet = true;
      if (this.aktFrage.antwort.antwortText.includes(this.aktFrage.antwort.gegebeneAntwort)) {
        this.istRichtig = true;
      };
    }
    else if (this.aktFrage.frageTyp !== "FI") {
      this.aktFrage.antworten.map(a => {
        if(a.gegebeneAntwort) {
          this.istBeantwortet = true;
          this.istRichtig = true;
          this.aktFrage.antworten.map(a => {if(a.gegebeneAntwort != a.istRichtig) this.istRichtig = false});
        };
      });
    };

    // erzeugen Objekt: userAntwort
    this.userAntwort = {
      frageId: this.aktFrage.frageId,
      istBeantwortet: this.istBeantwortet,
      istRichtig: this.istRichtig
    };

    // Wenn Antwort schon gegeben wurde, überschreiben wir diese im userAntworten (vielleicht Antwort wurde geändert)
    if (this.userAntwort.istBeantwortet) {
      for (let i=0; i < this.userAntworten.length; i++) {
        if (this.userAntworten[i].frageId === this.userAntwort.frageId) {
          this.userAntworten[i] = this.userAntwort;
        }
      };
    };
  }

  // berechnet richtige, falsche und unbeantwortete Fragen im Fragenpul
  countAntworten () {
    let countR: number = 0;
    let countF: number = 0;

    // Richtige und falsche Antworten zehlen
    this.userAntworten.map(a => {
      if (a.istBeantwortet && !a.istRichtig)
        countF++
      else if (a.istBeantwortet && a.istRichtig)
        countR++
    });
    this.richtig = countR;
    this.falsch = countF;
    this.unbeantworten = this.fragen.length - countR - countF;
  }

  // Navigation-Tasten
  zurueck() {
    if(this.aktNummer > 0)
    {
      this.aktNummer--;
      this.aktFrage = this.fragen[this.aktNummer];
      this.pruef = false;
      this.zeig = false;
      this.nextDis = false;
    }
  }

  home() {
    this.router.navigate(['', 'home']);
  }

  weiter() {
    // Antwort überprüfen und sie im userAntworten-Array hinzufügen
    this.userAntwortKontrolle();

    // Zehlen richtige und falsche Antworten
    this.countAntworten();
    
    // Zur nächsten Frage weiterleiten und Hilfe mit Fragenprüfung ausblenden
    if(this.aktNummer < this.fragen.length-1)
    {
      this.aktNummer++;
      this.aktFrage = this.fragen[this.aktNummer];
      this.pruef = false;
      this.zeig = false;
    }
    else {
      if(this.unbeantworten > 0) {
        alert("\nSie haben noch unbeantworteten Fragen!");
      }
      else if (this.falsch > 0) {
        alert("\nEs gibt noch Fragen, an die Sie noch arbeiten müssen,\nbevor mit dem Prüfmodus anfangen.");
      }
      else {
        alert("\nGratiliere!\nSie haben alle Fragen erfolgreich durchgearbeitet.\nJetzt können Sie mit dem Prüfmodus anfangen.");
      };
      // disabled für taste "weiter"
      this.nextDis = true;
    };
  }

  // zeigt Hilfe an
  zeigHilfe() {
    this.zeig = !this.zeig;
  }

  // zeigt an, ob gegebenen Antwort richtig oder falsch ist
  pruefen() {
    if (this.aktFrage.frageId==="FI") this.antwClass();
    this.pruef = !this.pruef;
  }

  // Hilfsmethoden
  // für richtige .html-Ausgabe von S-C-Fragen
  loeschen() {
    this.aktFrage.antworten.map(a => a.gegebeneAntwort=false);
  }

  // für richtige .html-Ausgabe von F-I-Fragen
  antwClass(): string {
    if (this.aktFrage.antwort.antwortText.includes(this.aktFrage.antwort.gegebeneAntwort)) {
      return "richtig"
    }
    else {
      return "fehler";
    };
  }
}
