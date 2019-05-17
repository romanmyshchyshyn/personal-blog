import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PostDetailsListComponent } from './post-details-list/post-details-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post/post.component';
import { BlogRoutingModule } from './blog-routing.module';
import { MatListModule, MatDividerModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    BlogComponent,
    PostDetailsListComponent, 
    PostDetailsComponent, 
    PostComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatListModule,
    MatDividerModule,
    MatCardModule
  ],
  exports: [
    BlogComponent,
    PostDetailsListComponent,
    PostDetailsComponent,
    PostComponent
  ]
})
export class BlogModule { }
