import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/admin/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-details-list',
  templateUrl: './post-details-list.component.html',
  styleUrls: ['./post-details-list.component.css']
})
export class PostDetailsListComponent implements OnInit {
  
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAll().subscribe(
      (data: Post[]) => {
        this.posts = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
