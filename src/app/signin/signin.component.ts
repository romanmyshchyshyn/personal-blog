import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required]
  });

  faSpinner = faSpinner;

  loading = false;
  failed: boolean;

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

  }

  onSubmit() {
    this.failed = false;
    this.loading = true;
    this.auth.signin(this.signinForm.get('name').value, this.signinForm.get('password').value).subscribe(
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
