import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Frage, UserAntwort } from '../shared/frage';
import { FrageStoreService } from '../shared/frage-store.service';

@Component({
  selector: 'app-teil-pruef-modus',
  templateUrl: './teil-pruef-modus.component.html',
  styleUrls: ['./teil-pruef-modus.component.css']
})
export class TeilPruefModusComponent implements OnInit {

  // um randome Fragenpull zu erstellen
  fragenTyp: string;
  fragenAnzahl: number;
  fragen: Frage[] = [];
  aktNummer: number = 0;
  aktFrage: Frage;

  // um Antwort zu prüfen
  userAntworten: UserAntwort[] = [];
  userAntwort: UserAntwort;
  istBeantwortet: boolean;
  istRichtig: boolean;
  richtig; falsch: number;
  unbeantworten: number;

  // für Taste "weiter"
  nextDis: boolean = false;

  constructor(
    private fs: FrageStoreService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // bekommen RandomFragePul mit X-FT und Y-FA
    this.fragenTyp = "ALL";
    this.fragenAnzahl = 60;
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
      if (a.istBeantwortet && !a.istRichtig) countF++
      else if (a.istBeantwortet && a.istRichtig) countR++
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

    // Feedback
    if (this.userAntworten.find(a => a.frageId === this.aktFrage.frageId).istBeantwortet &&
      !this.userAntworten.find(a => a.frageId === this.aktFrage.frageId).istRichtig)
      alert("\nIhre Antwort ist falsch.\nSie sollten noch im Lernmodus bleiben!")
    else if (this.userAntworten.find(a => a.frageId === this.aktFrage.frageId).istBeantwortet &&
      this.userAntworten.find(a => a.frageId === this.aktFrage.frageId).istRichtig)
      alert("\nGratuliere!\nIhre Antwort ist richtig!");
    
    // Zur nächsten Frage weiterleiten und Hilfe mit Fragenprüfung ausblenden
    if(this.aktNummer < this.fragen.length-1)
    {
      this.aktNummer++;
      this.aktFrage = this.fragen[this.aktNummer];
    }
    else {
      // disabled für taste "weiter"
      this.nextDis = true;
    };
  }
  
  auswerten() {
    // aktuelle Antwort überprüfen und sie im userAntworten-Array hinzufügen
    this.userAntwortKontrolle();

    // Meldung: OK - zur Auswertung, CANCEL - hier bleiben
    let jain = false;
    if(this.unbeantworten > 0) {
      jain = confirm ("\nSind Sie sicher?\nSie haben noch unbeantworteten Fragen!");
    };

    console.log('jain ist: ', jain);

    if (jain) {

      // in UserAntworten zügen FragenText hinzu (um schönere FragenAusgabe in Auswertung zu haben)
      this.userAntworten.map(a => {
        a.frageId = (a.frageId + '. ' + this.fragen.find(f => (f.frageId === a.frageId)).frageText);
      });

      // Userantworten schicken zu FS
      this.fs.getUserAntworten(this.userAntworten);

      console.log('UserAntworten, die zur Auswertung geschickt werden, sind: ', this.userAntworten);

      this.router.navigate(['', 'auswertung']);
    };    
  }

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