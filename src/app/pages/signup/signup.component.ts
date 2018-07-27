import { Router } from '@angular/router';
import { AlertService } from './../../services/alert.service';
import { Alert } from './../../classes/alert';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertType } from '../../enums/alert-type.enum';
import { LoadingService } from './../../services/loading.service';
import { AuthService } from './../../services/auth.service';
import { Subscription } from 'node_modules/rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  public signupForm: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private authService: AuthService,
    private loadingService: LoadingService,
    private router: Router,
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
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
      const {fullName, phoneNumber, email, password} = this.signupForm.value;

      // TODO call the auth service
      this.subscriptions.push(
        this.authService.signup(fullName, phoneNumber, email, password).subscribe( success => {
          if (success) {
          this.router.navigate(['/chat']);
          }
          this.loadingService.isLoading.next(false);
        })
      );
    } else {
      const failedSignupAlert = new Alert('Please enter valid name, email and password, try again!', AlertType.Danger);
      this.alertService.alerts.next(failedSignupAlert);
    }
  }

}
