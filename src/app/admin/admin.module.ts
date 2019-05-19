import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { BlogModule } from '../blog/blog.module';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostCreateComponent } from './post-create/post-create.component';


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
    BlogModule
  ],
  exports: [
    PostEditorComponent, 
    PostEditComponent, 
    PostCreateComponent
  ],
  providers: [
    PostService
  ]
})
export class AdminModule { }
