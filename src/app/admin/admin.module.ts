import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
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


@NgModule({
  declarations: [CreatePostComponent],
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
    CreatePostComponent
  ],
  providers: [
    PostService
  ]
})
export class AdminModule { }
