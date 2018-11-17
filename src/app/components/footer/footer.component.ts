import { Component, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';

@Component({
  styleUrls: ['./footer.component.sass'],
  templateUrl: './footer.component.html',
  selector: 'app-footer'
})

export class FooterComponent {
  @ViewChild('passwordModal') public passwordModal: ModalDirective;
  @Input() uid: any;

  adminPassword;
  passwordType = "password";
  showAlert = false;

  constructor(
    private userService: UserService,
    private router: Router) {

    this.uid = localStorage.getItem("uid");
  }

  enterAdminMode() {
    //for some weird reason this.AdminPassword is not read within the subscribe afte get()
    let adminPw = this.adminPassword;
    this.userService.getUser(this.uid).subscribe(function(doc) {
      let data = doc.data();
      if (adminPw === data.password) {
        this.passwordModal.hide();
        this.router.navigate(['/admin']);
        console.log(data);
      } else {
        console.log("wrong");
        this.showAlert = true;
      }
    })
      /* (user) => {
      console.log(user); */
      /* if (this.adminPassword === user.password) {
        this.passwordModal.hide();
        this.router.navigate(['/admin']);

      } *//*
    }) */
  }


}
