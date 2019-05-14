import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatInputModule, MatButtonModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
