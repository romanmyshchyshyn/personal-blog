import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PostDetailsListComponent } from './post-details-list/post-details-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post/post.component';
import { BlogRoutingModule } from './blog-routing.module';
import { MatListModule, MatDividerModule, MatCardModule, MatButtonModule, MatPaginatorModule, MatSliderModule, MatSelectModule } from '@angular/material';
import { PostFooterComponent } from './post-footer/post-footer.component';
import { AdminModule } from '../admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RateComponent } from './rate/rate.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RateService } from './rate/rate.service';

@NgModule({
  declarations: [
    BlogComponent,
    PostDetailsListComponent, 
    PostDetailsComponent, 
    PostComponent, 
    PostFooterComponent,
    RateComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BlogRoutingModule,
    FontAwesomeModule,
    AdminModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSliderModule,
    MatSelectModule
  ],
  providers: [
    RateService
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
