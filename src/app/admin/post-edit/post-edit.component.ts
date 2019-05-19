import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from 'src/app/shared/models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/shared/guards/candeactivate.guard';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { UnsavedChangesSheetComponent } from 'src/app/sheet/unsaved-changes-sheet/unsaved-changes-sheet.component';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit, CanComponentDeactivate {

  post: Post;
  editorTitle: string = "Update post";
  isDirty: boolean = false;

  loading = false;
  failed: boolean;

  sheetRef: MatBottomSheetRef<UnsavedChangesSheetComponent>;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router,
    private bottomSheet: MatBottomSheet)
  { }

  ngOnInit() {
    const postId: string = this.route.snapshot.paramMap.get('id');
    this.postService.get(postId).subscribe(
      (data: Post) => this.post = data,
      (error) => console.log(error)
    );
  }

  onSubmit($event) {
    this.failed = false;
    this.loading = true;

    this.postService.update($event).subscribe(
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
    if (this.isDirty) {
      this.sheetRef = this.bottomSheet.open(UnsavedChangesSheetComponent);

      return this.sheetRef.afterDismissed();
    }

    return true;
  }
}
