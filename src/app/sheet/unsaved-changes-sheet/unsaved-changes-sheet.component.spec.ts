import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsavedChangesSheetComponent } from './unsaved-changes-sheet.component';

describe('UnsavedChangesSheetComponent', () => {
  let component: UnsavedChangesSheetComponent;
  let fixture: ComponentFixture<UnsavedChangesSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsavedChangesSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsavedChangesSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
