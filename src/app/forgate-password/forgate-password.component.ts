import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgate-password',
  templateUrl: './forgate-password.component.html',
  styleUrls: ['./forgate-password.component.css']
})
export class ForgatePasswordComponent {
  YourFormControl!:FormGroup;
}
