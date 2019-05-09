import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FontAwesomeModule,
    SigninRoutingModule,
  ],
  declarations: [SigninComponent]
})
export class SigninModule { }
