import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-unsaved-changes-sheet',
  templateUrl: './unsaved-changes-sheet.component.html',
  styleUrls: ['./unsaved-changes-sheet.component.css']
})
export class UnsavedChangesSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<UnsavedChangesSheetComponent>) { }

  ngOnInit() {
  }

  action(answer: boolean) {
    this.bottomSheetRef.dismiss(answer);
  }
}
