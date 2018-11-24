import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiBaseUrl } from 'app';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  private uid;
  private tokens;

  constructor(private http: HttpClient, private router: Router) {}

  getOptions() {
    let headers = new HttpHeaders();
    if (this.tokens.accessToken) {
      headers = headers.append('Authorization', `Bearer: ${this.tokens.accessToken}`);
    }
    return { headers };
  }

  login(data) {
    return this.http.post(`${ApiBaseUrl}/login`, data).pipe(map(res => {
      console.log(res);
      this.uid = res['user'].uid;
      localStorage.setItem('uid', this.uid);
      //grab and save token credentials
      this.tokens = res['credentials'];
      localStorage.setItem('credentials', this.tokens);
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

  setAdminPassword() {
    localStorage.setItem('admin', "true");
  }

  deleteAdminPassword() {
    localStorage.setItem('admin', "false");
  }

}
