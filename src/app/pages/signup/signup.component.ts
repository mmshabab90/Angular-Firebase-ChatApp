import { AlertService } from './../../services/alert.service';
import { Alert } from './../../classes/alert';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertType } from '../../enums/alert-type.enum';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;

  constructor(private fb: FormBuilder, private alertService: AlertService) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.signupForm = this.fb.group({
      fullName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public submit() {
    if (this.signupForm.valid) {
      // TODO call the auth service
      const {fullName, phoneNumber, email, password} = this.signupForm.value;
      console.log(`Full Name: ${fullName}, Phone Number: ${phoneNumber}, Email: ${email}, Password: ${password}`);
    } else {
      const failedSignupAlert = new Alert('Please enter valid name, email and password, try again!', AlertType.Danger);
      this.alertService.alerts.next(failedSignupAlert);
    }
  }

}
