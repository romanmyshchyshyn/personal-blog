import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatDividerModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    FontAwesomeModule,
    RouterModule,
    SearchModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
