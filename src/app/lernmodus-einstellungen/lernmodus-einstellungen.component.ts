import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FragenTyp } from '../shared/frage';
import { FrageStoreService } from '../shared/frage-store.service';


@Component({
  selector: 'app-lernmodus-einstellungen',
  templateUrl: './lernmodus-einstellungen.component.html',
  styleUrls: ['./lernmodus-einstellungen.component.css']
})
export class LernmodusEinstellungenComponent implements OnInit {

  fragenAnzahl: number;
  fragenTyp: string;
  fragenTypen: FragenTyp[];

  aktFragenTypId = "ALL";
  aktFragenTyp: FragenTyp;

  constructor(
    private fs: FrageStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fragenTypen = this.fs.getFragenTypen();
    // console.log(this.fragenTypen);

    this.onFragenTypChange();
    // console.log(this.aktFragenTyp);

    // this.fs.getFragenTypen().subscribe((fragenTypen: FragenTyp[]) => (this.fragenTypen = fragenTypen))
  }



  // Schickt FrTyp und -Anzahl nach FrService und leitet zum Lernmodus weiter
  onSubmit(form: NgForm) {
    // console.log('Form: ', form);
    // console.log('Value: ', form.value);

    let {aktFragenTypId, fragenAnzahl} = form.value;
    if (fragenAnzahl == 0) fragenAnzahl = 5;
    if (fragenAnzahl < 0) fragenAnzahl *= -1;

    if (aktFragenTypId == null) aktFragenTypId = 'ALL'

    this.fs.getFragenTyp(aktFragenTypId);
    // console.log(this.fs.fragenTyp);
    this.fs.getFragenAnzahl(fragenAnzahl);
    // console.log(this.fs.fragenAnzahl);

    this.router.navigate(['', 'lernmodus']);
  }

  onFragenTypChange() {
    this.aktFragenTyp = this.fragenTypen.find(ft => ft.id === this.aktFragenTypId);
  }
}
