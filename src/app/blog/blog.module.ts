import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PostDetailsListComponent } from './post-details-list/post-details-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [BlogComponent, PostDetailsListComponent, PostDetailsComponent, PostComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BlogComponent,
    PostDetailsListComponent,
    PostDetailsComponent,
    PostComponent
  ]
})
export class BlogModule { }
