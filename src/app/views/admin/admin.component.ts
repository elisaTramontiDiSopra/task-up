import { Component } from '@angular/core';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {
  changePassword = false;
  passwordType = "password";
  languageSelected = "it";

  availableLanguages = [
    {name: "italian", value: "it_IT", label: "Italiano"},
    {name: "english", value: "en_EN", label: "English"},
  ]

  constructor(
  ) {
  }

  changePasswordVisibility() {
    this.passwordType ==="password"  ? this.passwordType="text" : this.passwordType="password";
  }
  changeLanguageSelection(event) {
    console.log(event);
  }
}
