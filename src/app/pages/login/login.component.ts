import { AuthService } from './../../services/auth.service';
import { Subscription } from 'node_modules/rxjs';
import { LoadingService } from './../../services/loading.service';
import { AlertService } from './../../services/alert.service';
import { Alert } from './../../classes/alert';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertType } from '../../enums/alert-type.enum';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;
  private subscriptions: Subscription[] = [];
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private loadingService: LoadingService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/chat';
  }
  ngOnDestroy() {
    // prevents memory leaks
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public submit(): void {

    if (this.loginForm.valid) {
      this.loadingService.isLoading.next(true);
      const {email, password} = this.loginForm.value;

      // TODO call the auth service
      this.subscriptions.push(
        this.authService.login(email, password).subscribe(success => {
          if (success) {
            this.router.navigateByUrl(this.returnUrl);
          }
          this.loadingService.isLoading.next(false);
        })
      );
    } else {
      const failedLoginAlert = new Alert('Your email or password were invalid, try again.', AlertType.Danger);
        this.loadingService.isLoading.next(false);
        this.alertService.alerts.next(failedLoginAlert);
    }
  }

}
