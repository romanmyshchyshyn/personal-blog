import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder } from '@angular/forms';
import { SigninModel } from './signin-model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  faSpinner = faSpinner;

  loading = false;
  failed: boolean;

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.failed = false;
    this.loading = true;
    const signinModel: SigninModel = {
      name: this.signinForm.get('name').value,
      password: this.signinForm.get('password').value
    };
    this.auth.signin(signinModel).subscribe(
      (data) => {
        this.router.navigate([this.auth.redirectUrl || '/']);
      },
      (error) => {
        console.log(error);
        this.failed = true;
        this.loading = false;
      },
    );
  }
}
