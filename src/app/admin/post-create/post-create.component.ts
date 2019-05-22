import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/shared/guards/candeactivate.guard';
import { Observable, Subscription } from 'rxjs';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material';
import { UnsavedChangesSheetComponent } from 'src/app/sheet/unsaved-changes-sheet/unsaved-changes-sheet.component';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit, OnDestroy, CanComponentDeactivate {

  addSubscribe: Subscription;

  editorTitle: string = "Create post";

  loading: boolean = false;
  failed: boolean;

  isDirty: boolean = false;
  isSubmitted: boolean = false;

  sheetRef: MatBottomSheetRef<UnsavedChangesSheetComponent>;

  constructor(
    private postService: PostService,
    private auth: AuthService,
    private router: Router,
    private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  onSubmit($event) {
    this.failed = false;
    this.loading = true;
    this.isSubmitted = true;

    this.addSubscribe = this.postService.add($event).subscribe(
      data => this.router.navigate([this.auth.redirectUrl || '/']),
      error => {
        console.log(error);
        this.failed = true;
        this.loading = false;
      }     
    );
  }

  onDirty($event) {
    this.isDirty = $event;
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.isDirty && !this.isSubmitted) {
      this.sheetRef = this.bottomSheet.open(UnsavedChangesSheetComponent);

      return this.sheetRef.afterDismissed();
    }

    return true;
  }

  ngOnDestroy(): void {
    if (this.addSubscribe) {
      this.addSubscribe.unsubscribe();
    }
  }
}
