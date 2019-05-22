import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { DeleteSheetComponent } from 'src/app/sheet/delete-sheet/delete-sheet.component';
import { PostService } from '../../shared/services/post.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-actions',
  templateUrl: './post-actions.component.html',
  styleUrls: ['./post-actions.component.css']
})
export class PostActionsComponent implements OnInit, OnDestroy {

  @Input()
  postId: string;

  sheetRef: MatBottomSheetRef<DeleteSheetComponent>;

  afterDismissedSubscribe: Subscription;
  postDeleteSubscribe: Subscription;

  constructor(
    private bottomSheet: MatBottomSheet,
    private postService: PostService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onDelete() {
    this.sheetRef = this.bottomSheet.open(DeleteSheetComponent);
    this.afterDismissedSubscribe = this.sheetRef.afterDismissed().subscribe(
      (answer: boolean) => {
            
        if (answer) {
          this.postService.delete(this.postId).subscribe(
            data => {
              this.router.navigate([this.auth.redirectUrl || '/'])
            },
            (error) => console.log(error)
          );
        }
      },
      (error) => console.log(error)
    );
  }

  ngOnDestroy(): void {
    if (this.afterDismissedSubscribe) {
      this.afterDismissedSubscribe.unsubscribe();
    }

    if (this.postDeleteSubscribe) {
      this.postDeleteSubscribe.unsubscribe();
    }   
  }
}
