import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from '../shared/apicall.service';
import { first } from 'rxjs';

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

  constructor(public apicallService: ApicallService, private router: Router) {
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
    // if (
    //   this.userRegistrationForm.valid &&
    //   this.userRegistrationForm.value.password ===
    //     this.confirmPassword.nativeElement.value
    // ) {
    //   console.log('user form value is ', this.userRegistrationForm.value);
    //   this.apicallService
    //     .registerUser(this.userRegistrationForm.value)
    //     .pipe(first())
    //     .subscribe(
    //       (res: any) => {
    //         if (res && res['status'] === 'Okay' && res['data']['_id']) {
    //           this.router.navigate(['/login']);
    //         }
    //       },
    //       (err: any) => {
    //         if (err) {
    //           console.log('We got an error in signup ');
    //         }
    //       }
    //     );
    // }

    var success = this.apicallService
      .registerUser(this.userRegistrationForm.value)
      .subscribe((result) => {
        console.log('result', result);
      });
    if (success) {
      this.router.navigate(['/login']);
    } else {
      console.log('failed to navigate to login page');
    }
  }
  ngOnInit() {}
}
