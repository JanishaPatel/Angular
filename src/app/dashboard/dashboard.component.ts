import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../shared/apicall.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private apicallService: ApicallService, public router: Router) {}
  onLogout() {
    // if (this.loginUserForm.valid) {
    //   console.log('in');
    //   var success = this.apicallService
    //     .login(this.loginUserForm.value)
    //     .subscribe((res: any) => {
    //       console.log(res);
    //     });
    //   if (success) {
    //     alert('You have successfully logged out');
    //     this.router.navigate(['/login']);
    //   }
    // }
    localStorage.removeItem('token');
  }
  ngOnInit() {}
}
