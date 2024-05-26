import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Frage, UserAntwort } from '../shared/frage';
import { FrageStoreService } from '../shared/frage-store.service';

@Component({
  selector: 'app-auswertung',
  templateUrl: './auswertung.component.html',
  styleUrls: ['./auswertung.component.css']
})
export class AuswertungComponent implements OnInit {
  userAntworten: UserAntwort[] = [];
  fragen: Frage[] = [];
  richtig: number = 0;
  falsch: number = 0;
  unbeantworten: number = 0;
  ergebnis: string;
  punkten: number;
  error: boolean = false;

  constructor(
    private fs: FrageStoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // bekommen unsere Antworten
    if (this.fs.userAntworten == undefined) {
      this.error = true;
    }
    else {
      this.userAntworten = this.fs.userAntworten;
      console.log('Bekommene Antworten sind: ', this.userAntworten);
  
      this.countAntworten();
  
      this.bewertung();
    }

  }

  bewertung() {
    this.punkten = Math.floor((this.richtig / this.userAntworten.length) * 800)
    if (this.punkten >= 500) {
      this.ergebnis = "BESTANDEN";
    }
    else {
      this.ergebnis = "NICHT BESTANDEN";
    }

    console.log('Punkten: ', this.punkten, ' von 800. Ergebnis: ', this.ergebnis);
  }

  countAntworten() {
    let countR: number = 0;
    let countF: number = 0;
    let countU: number = 0;

    // Zählen richtige und falsche Antworten
    this.userAntworten.map(a => {
      if (a.istBeantwortet && a.istRichtig) countR++
      else if (a.istBeantwortet && !a.istRichtig) countF++
      else countU++;
    })

    this.richtig = countR;
    this.falsch = countF + countU;
    this.unbeantworten = countU;

    // console.log('Richtig: ', this.richtig, ', Falsch: ', this.falsch, ', Unbeantwortet davon: ', this.unbeantworten)
  }

  home() {
    this.router.navigate(['', 'home']);
  }
}
