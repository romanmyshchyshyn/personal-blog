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
import { BlogModule } from '../blog/blog.module';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { UnsavedChangesSheetComponent } from '../sheet/unsaved-changes-sheet/unsaved-changes-sheet.component';
import { SheetModule } from '../sheet/sheet.module';


@NgModule({
  declarations: [
    PostEditorComponent, 
    PostEditComponent, 
    PostCreateComponent
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
    BlogModule,
    SheetModule
  ],
  exports: [
    PostEditorComponent, 
    PostEditComponent, 
    PostCreateComponent
  ],
  providers: [
    PostService
  ],
  entryComponents: [
    UnsavedChangesSheetComponent
  ]
})
export class AdminModule { }
