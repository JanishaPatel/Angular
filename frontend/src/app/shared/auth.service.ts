import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  registerUser(userData: any) {
    // console.log(userData);

    return this.http.post('http://localhost:3000/auth/register', userData);
  }
  registerAdmin(adminData: any) {
    console.log(adminData);
    return this.http.post('http://localhost:3000/admin/register', adminData);
  }

  login(email: string, password: string) {
    // console.log('under func');

    return this.http.post('http://localhost:3000/auth/login', {
      email: email,
      password: password,
    });
  }
  adminlogin(email: string, password: string) {
    // console.log('under func');

    return this.http.post('http://localhost:3000/admin/login', {
      email: email,
      password: password,
    });
  }
}

// register() {
//   let bodyData = {
//       companyName: this.companyName,
//       designation: this.designation,
//       fromDate: this.fromDate,
//       toDate: this.toDate,
//       experienceLetter: this.experienceLetter
//   }
//   const userData: any = localStorage.getItem('userData')
//   const data = JSON.parse(userData)
//   const token = data.token

//   this.http.post('http://127.0.0.1:5000/api/experience', bodyData, {
//       headers: {
//           'Authorization': 'Bearer ' + token,
//           'Content-Type': 'application/json'
//       }
//   }).subscribe((resultData: any) => {
//       console.log(resultData);
//       const userData = {
//           user: resultData.student,
//           role: 'student',
//           token: resultData.token
//       }
//   })
