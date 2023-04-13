import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  // userSub!: Subscription;
  constructor(
    private _authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.router.events.subscribe((val: any) => {
      // console.log(val.url);
      if (val.url) {
        if (localStorage.getItem('token')) {
          this.isAuthenticated = true;
        }
      }
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
    console.log('logout successfully');
    this.toastr.success('Logout successfully', 'Alert');
  }
}
