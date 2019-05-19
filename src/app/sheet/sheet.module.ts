import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsavedChangesSheetComponent } from './unsaved-changes-sheet/unsaved-changes-sheet.component';
import { MatBottomSheetModule, MatButtonModule, MatDividerModule } from '@angular/material';

@NgModule({
  declarations: [
    UnsavedChangesSheetComponent
  ],
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    UnsavedChangesSheetComponent
  ]
})
export class SheetModule { }
