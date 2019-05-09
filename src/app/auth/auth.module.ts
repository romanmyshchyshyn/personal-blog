import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class AuthModule { }