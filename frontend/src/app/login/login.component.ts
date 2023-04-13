import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserForm!: FormGroup;
  roleParam: any = '';
  constructor(
    private _authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private _Activatedroute: ActivatedRoute
  ) {
    this.loginUserForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onLogin() {
    this.roleParam = this._Activatedroute.snapshot.paramMap.get('role');
    console.log(this.roleParam);

    if (this.roleParam === 'user') {
      const val = this.loginUserForm.value;
      var success = this._authService
        .login(val.email, val.password)
        .subscribe((res: any) => {
          if (res.message === 'Login Successfull!') {
            localStorage.setItem('token', JSON.stringify(res.token));
            // this._toastService.info('Login Successfull')
            this.router.navigate(['/home']);
            this.toastr.success('Login Successfull', 'Success');
          } else {
            console.log('failed to navigate to home page');
            this.toastr.error('Failed to login');
          }
        });
      console.log('success', success);
    } else if (this.roleParam === 'admin') {
      const val = this.loginUserForm.value;
      var success = this._authService
        .adminlogin(val.email, val.password)
        .subscribe((res: any) => {
          if (res.message === 'Login Successfull!') {
            localStorage.setItem('token', JSON.stringify(res.token));
            // this._toastService.info('Login Successfull')
            this.router.navigate(['/home']);
            this.toastr.success('Login Successfull', 'Success');
          } else {
            console.log('failed to navigate to home page');
            this.toastr.error('Failed to login');
          }
        });
      console.log('success', success);
    }
  }
  forgotPassword() {
    console.log('forgot password function called');
  }
  ngOnInit(): void {}
}

/// now your task is if param is user then call user login api
// or if role id admin calll admin login api
// okay? hard h dekhte h
// easy he wait
