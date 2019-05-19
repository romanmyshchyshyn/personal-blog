import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatBottomSheetModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { UnsavedChangesSheetComponent } from '../sheet/unsaved-changes-sheet/unsaved-changes-sheet.component';
import { SheetModule } from '../sheet/sheet.module';
import { PostActionsComponent } from './post-actions/post-actions.component';
import { DeleteSheetComponent } from '../sheet/delete-sheet/delete-sheet.component';


@NgModule({
  declarations: [
    PostEditorComponent, 
    PostEditComponent, 
    PostCreateComponent,
    PostActionsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FontAwesomeModule,
    MatCardModule,
    NgScrollbarModule,
    MaterialFileInputModule,
    MatBottomSheetModule,
    SheetModule
  ],
  exports: [
    PostEditorComponent, 
    PostEditComponent, 
    PostCreateComponent,
    PostActionsComponent
  ],
  providers: [
    PostService
  ],
  entryComponents: [
    UnsavedChangesSheetComponent,
    DeleteSheetComponent
  ]
})
export class AdminModule { }
