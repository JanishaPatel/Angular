import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
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
  // gotoDashboard(token: any) {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${token}`,
  //   });
  //   return this.http.get('http://localhost:3000/auth/login', {
  //     headers: headers,
  //   });
  // }
  // logout(userData: any) {
  //   return this.http.delete(`http://localhost:3000/auth/logout/+ ${token}`);
  // }

  login(username: string, password: string): Observable<boolean> {
    return this.http
      .post<{ token: string }>('/auth/login', {
        username: username,
        password: password,
      })
      .pipe(
        map((result) => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}
