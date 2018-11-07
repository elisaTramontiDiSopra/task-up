import { Component } from '@angular/core';
import '../style/global.sass';

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
