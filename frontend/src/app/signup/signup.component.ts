import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  userRegistrationForm!: FormGroup;
  @ViewChild('confirmPassword', { static: false }) confirmPassword!: ElementRef;
  genderValues: any = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
    { name: 'Other', value: 'other' },
  ];
  constructor(private _authService: AuthService, private router: Router,private toastr:ToastrService) {
    this.userRegistrationForm = new FormGroup<any>({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    var success = this._authService
      .registerUser(this.userRegistrationForm.value)
      .subscribe((result) => {
        console.log('result', result);
      });
    if (success) {
      this.router.navigate(['/login']);
      this.toastr.success('Successfully Registered')
    } else {
      console.log('failed to navigate to login page');
    }
  }
  ngOnInit() {}
}
