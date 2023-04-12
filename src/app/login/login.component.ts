import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from '../shared/apicall.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserForm!: FormGroup;
  constructor(private apicallService: ApicallService, public router: Router) {
    this.loginUserForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    const val = this.loginUserForm.value;
    // if (this.loginUserForm.valid) {
    // var user = this.apicallService.login(val.email, val.password);
    // console.log("userinfo:",user);
    var success = this.apicallService
      .login(val.email, val.password)
      .subscribe((res) => {
        console.log(res);
      });
    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      console.log('failed to navigate to dashboard page');
    }
    // var token=localStorage.getItem('token');
    // console.log(token,'token');
  }
  ngOnInit(): void {}
}
