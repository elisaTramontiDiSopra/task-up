import { Component } from '@angular/core';
import { AuthService, LoadingService } from 'app';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from 'angularfire2/auth';

import { FirebaseAuthService } from '../../services/firebase-auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  user: any = {}
  isLoading: boolean;

  constructor(
    //private auth: AuthService,
    public fbAuth: FirebaseAuthService,
    public auth: AngularFireAuth,
    private loadingService: LoadingService,
    private toaster: ToastrService
  ) {
  }

  login() {
    this.loadingService.start();
    /* this.fbAuth.doGoogleLogin()
      .then(r => {
        this.loadingService.stop();
      })
      .catch(err => {
        this.loadingService.stop();
        this.toaster.error(err);
      }); */
  }
  googleLogin() {
    this.loadingService.start();
    this.fbAuth.doGoogleLogin()
    .then(r => {
      this.loadingService.stop();
      console.log(r);
    })
    .catch(err => {
      this.loadingService.stop();
      this.toaster.error(err);
    });
  }

  googleRegistration() {
    this.fbAuth.doGoogleLogin()
    .then(r => {
      this.loadingService.stop();
    })
    .catch(err => {
      this.loadingService.stop();
      this.toaster.error(err);
    });
  }

  /* login() {
    this.loadingService.start();
    setTimeout(() => {
      this.auth.login(this.user).subscribe(
        res => {
          this.loadingService.stop()
        }, error => {
          this.toaster.error(error);
          this.loadingService.stop()
        }
      );
    }, 3000);
  } */
}
