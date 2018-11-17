import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import "../style/global.sass";
import * as firebase from "firebase";
import firestore from "firebase/firestore";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  //animation settings
  //toState = 'state1';

  /* changeState(state: any) {
    this.toState = state;
  }

 */
  constructor(translateService: TranslateService) {

    // this language will be used as a fallback when a translation isn't found in the current language
    //translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    //translateService.use('en');

    translateService.use('i18n/it_IT.json');
  }
}
