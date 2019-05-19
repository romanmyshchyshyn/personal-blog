import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatProgressBarModule,
  MatSidenavModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogModule } from './blog/blog.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SigninModule,
    SignupModule,
    AuthModule,
    NavbarModule,
    FooterModule,
    BlogModule,
    AdminModule,

    AppRoutingModule,
        
    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
