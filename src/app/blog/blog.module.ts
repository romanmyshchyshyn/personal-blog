import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PostDetailsListComponent } from './post-details-list/post-details-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post/post.component';
import { BlogRoutingModule } from './blog-routing.module';
import { MatListModule, MatDividerModule, MatCardModule, MatButtonModule, MatPaginatorModule } from '@angular/material';
import { PostFooterComponent } from './post-footer/post-footer.component';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [
    BlogComponent,
    PostDetailsListComponent, 
    PostDetailsComponent, 
    PostComponent, 
    PostFooterComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    AdminModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  exports: [
    BlogComponent,
    PostDetailsListComponent,
    PostDetailsComponent,
    PostComponent,
    PostFooterComponent
  ]
})
export class BlogModule { }
