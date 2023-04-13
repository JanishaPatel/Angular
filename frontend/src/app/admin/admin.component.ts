import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  adminRegistrationForm!: FormGroup;
  @ViewChild('confirmPassword', { static: false }) confirmPassword!: ElementRef;
  constructor(
    private _authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.adminRegistrationForm = new FormGroup<any>({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    var success = this._authService
      .registerAdmin(this.adminRegistrationForm.value)
      .subscribe((result) => {
        console.log('result', result);
      });
    if (success) {
      this.router.navigate(['/login']);
      this.toastr.success('Admin Successfully Registered');
    } else {
      console.log('failed to navigate to login page');
    }
  }
  ngOnInit(): void {}
}
