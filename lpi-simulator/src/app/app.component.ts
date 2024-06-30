import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lern & Prüf Simulator';

  constructor(
    private router: Router
  ){}


//  toHalfExam(){
//    this.router.navigate(
//      ['/half-exam'], // this.curQuestion.questionId],
//      {
//        queryParams: {
//          count: 30,
//          num: 1
//        } 
//      }
//    );
//  }
}
