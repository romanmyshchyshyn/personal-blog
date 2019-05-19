import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsavedChangesSheetComponent } from './unsaved-changes-sheet/unsaved-changes-sheet.component';
import { MatBottomSheetModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { DeleteSheetComponent } from './delete-sheet/delete-sheet.component';

@NgModule({
  declarations: [
    UnsavedChangesSheetComponent,
    DeleteSheetComponent
  ],
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    UnsavedChangesSheetComponent,
    DeleteSheetComponent
  ]
})
export class SheetModule { }
