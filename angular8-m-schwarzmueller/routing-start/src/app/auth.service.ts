import { Injectable } from '@angular/core';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor() { }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  isAuthenticated(): Promise<boolean> {

    return new Promise(
      (_resolve, _reject) => {
        setTimeout(() => {
          _resolve(this.loggedIn);
        }, 800);
      }
    );
  }
}
