import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiBaseUrl } from 'app';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject(null);
  private userSubject = new BehaviorSubject(null);
  public jwtToken: string;

  private uid;
  private tokens;

  constructor(private http: HttpClient, private router: Router) {}

  getOptions() {
    let headers = new HttpHeaders();
    if (this.jwtToken) {
      headers = headers.append('Authorization', `Bearer: ${this.jwtToken}`);
    }
    return { headers };
  }

  // private user: User;

  // private setUser(user) {
  //   localStorage.setItem('user', JSON.stringify(user));
  //   this.user = user;
  // }

  login(data) {
    return this.http.post(`${ApiBaseUrl}/login`, data).pipe(map(res => {
      console.log(res);
      //grab and save uid
      this.uid = res['user'].uid;
      localStorage.setItem('uid', this.uid);
      //grab and save token credentials
      this.tokens = res['credentials'];
      localStorage.setItem('credentials', this.tokens);


      // this.setUser(user.json());
      // return user.json()
    }));
  }

  logout() {
    localStorage.removeItem('uid');
  }

  isAuthenticated() {
    if(!this.uid) {
      if(localStorage.getItem('uid')) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }

  // getUser() {
  //   if (!this.user) {
  //     if (localStorage.getItem('user')) {
  //       // for some reason user has been removed from localStorage, try to recover it
  //       this.setUser(JSON.parse(localStorage.getItem('user')));
  //       return this.user;
  //     } else {
  //       this.router.navigate(['/login']);
  //     }
  //   } else {
  //     return this.user;
  //   }
  // }

  /* getAccessToken() {
    if (this.uid) {
      return !!this.user.access_token;
    }
  } */
}
