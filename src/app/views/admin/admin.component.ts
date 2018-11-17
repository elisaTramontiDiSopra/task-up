import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {
  changePassword = false;
  passwordType = "password";
  radioNotTouched = true;
  uid;
  selectedLanguage;

  availableLanguages = [
    {name: "italian", value: "it_IT", label: "Italiano"},
    {name: "english", value: "en_EN", label: "English"},
  ]

  constructor(
    private userService: UserService,
    private translateService: TranslateService
  ) {
    this.uid = localStorage.getItem("uid");
    this.selectedLanguage = localStorage.getItem("language");
    console.log(this.selectedLanguage)
  }

  changePasswordVisibility() {
    this.passwordType ==="password"  ? this.passwordType="text" : this.passwordType="password";
  }

  changeSelectedLanguage() {
    //select my user collection and change the value of key language
    this.translateService.use('i18n/'+this.selectedLanguage+'.json');
    this.userService.updateUser(this.uid, "language", this.selectedLanguage);
    localStorage.setItem("language", this.selectedLanguage);
  }
}
