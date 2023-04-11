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
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    // console.log(this.loginUserForm.value);
    const val=this.loginUserForm.value;
    if (this.loginUserForm.valid) {
      console.log('in');
      const user = this.apicallService.login(val.email,val.password);
      // .subscribe((res: any) => {
      //   console.log(res);
      // });
      console.log(user);
      
      // if (user) {
      //   localStorage.setItem('token', user.token);
      //   alert('You have successfully logged in');
      //   this.router.navigate(['/dashboard']);
      // } else {
      //   alert('Login Failed');
      // }

      // this.apicallService.login(this.loginUserForm.value).subscribe(
      //   (res: any) => {
      //     if (
      //       res &&
      //       res['status'] === 'Okay' &&
      //       res['data']['response'] &&
      //       res['data']['authToken']
      //     ) {
      //       localStorage.setItem('token', res['data']['authToken']);
      //       this.router.navigate(['/dashboard']);
      //     }
      //   },
      //   (err) => {
      //     console.log('We got an error in login ');
      //   }
      // );
    }
    // console.log('user form value is ', this.loginUserForm.value);
  }
}
