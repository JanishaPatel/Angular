import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  kind: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registerd?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ApicallService {
  constructor(public http: HttpClient) {}
  // login(userData: any) {
  //   return this.http.post('http://localhost:3000/auth/login', userData);
  // }

  // login(userData: any) {
  //   let userArray = [];
  //   if (localStorage.getItem('users')) {
  //     userArray = JSON.parse(localStorage.getItem('users') || '{}');
  //   }
  //   return userArray.find(
  //     (p: any) =>
  //       p.username === userData.username && p.password === userData.password
  //   );
  // }

  registerUser(userData: any) {
    console.log(userData);

    return this.http.post('http://localhost:3000/auth/register', userData);
  }
  
  login(email: string, password: string) {
    console.log('under func');

    return this.http.post('http://localhost:3000/auth/login', {
      email: email,
      password: password,
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}
