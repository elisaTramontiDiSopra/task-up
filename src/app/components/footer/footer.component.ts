import { Component, ViewChild, Input } from "@angular/core";
import { UserService } from "app/services/user.service";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Router } from "@angular/router";

@Component({
  styleUrls: ["./footer.component.sass"],
  templateUrl: "./footer.component.html",
  selector: "app-footer"
})
export class FooterComponent {
  @ViewChild("passwordModal") public passwordModal: ModalDirective;
  @Input() uid: any;

  adminPassword;
  passwordType = "password";
  showAlert = false;

  constructor(public router: Router, private userService: UserService) {
    this.uid = this.userService.getUid();
  }

  enterAdminMode() {
    //for some weird reason this.AdminPassword is not read within the subscribe afte get()
    let adminPw = this.adminPassword;
    console.log(adminPw);
    console.log(this.uid);
    this.userService.getUser(this.uid).subscribe(res => {
      if (res.exists) {
        //console.log("Document data:", res.data());
        let doc = res.data();
        if (adminPw === doc.password) {
          this.passwordModal.hide();
          this.router.navigate(['/admin']);
        } else {
          this.showAlert = true;
        }

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      /* function(doc) {
      let data = doc.data(); */
      /* if (adminPw === data.password) {
        //this.passwordModal.hide();
        this.router.navigate(['/admin']);
        console.log(data);
        this.r
      } else {
        console.log("wrong");
        this.showAlert = true;
      } */
    });
  }

  goTo(page) {
    let goPage = "/"+page
    this.router.navigate([goPage]);
  }

}
