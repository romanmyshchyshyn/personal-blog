import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/admin/post.service';
import { Post } from 'src/app/shared/models/post';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-post-details-list',
  templateUrl: './post-details-list.component.html',
  styleUrls: ['./post-details-list.component.css']
})
export class PostDetailsListComponent implements OnInit {
  
  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private searchService: SearchService
    ) { }

  ngOnInit() {
    this.postService.currentPostDeleted.subscribe(
      (id: string) => this.posts = this.posts.filter(
        p => p.id != id
      ),
      (error) => console.log(error)
    );

    this.searchService.currentSearch.subscribe(
      (posts: Post[]) => this.posts = posts,
      (error) => console.log(error)
    );

    this.searchService.search();
  }
}
