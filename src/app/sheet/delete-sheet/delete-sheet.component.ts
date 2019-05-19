import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { UnsavedChangesSheetComponent } from '../unsaved-changes-sheet/unsaved-changes-sheet.component';

@Component({
  selector: 'app-delete-sheet',
  templateUrl: './delete-sheet.component.html',
  styleUrls: ['./delete-sheet.component.css']
})
export class DeleteSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<UnsavedChangesSheetComponent>) { }

  ngOnInit() {
  }

  action(answer: boolean) {
    this.bottomSheetRef.dismiss(answer);
  }
}
