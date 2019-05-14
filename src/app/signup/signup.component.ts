import { Component, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { SignupModel } from './signup-model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  faSpinner = faSpinner;

  loading = false;
  failed: boolean;

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.failed = false;
    this.loading = true;
    const signupModel: SignupModel = {
      name: this.signupForm.get('name').value,
      email: this.signupForm.get('email').value,
      password: this.signupForm.get('password').value
    };
    this.auth.signup(signupModel).subscribe(
      (data) => {
        this.router.navigate([this.auth.redirectUrl || 'signin']);
      },
      (error) => {
        console.log(error);
        this.failed = true;
        this.loading = false;
      },
    );
  }
}
