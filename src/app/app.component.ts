import { Component } from '@angular/core';
import '../style/global.sass';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  //animation settings
  toState = 'state1';

  changeState(state: any) {
    this.toState = state;
  }


}
