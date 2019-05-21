import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { Post } from 'src/app/shared/models/post';
import { SearchService } from 'src/app/shared/services/search.service';
import { PageEvent, MatPaginator } from '@angular/material';
import { SearchResult } from 'src/app/shared/models/search-result';

@Component({
  selector: 'app-post-details-list',
  templateUrl: './post-details-list.component.html',
  styleUrls: ['./post-details-list.component.css']
})
export class PostDetailsListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  posts: Post[] = [];
  length: number = 10;

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

    this.paginator.pageIndex = this.searchService.pageIndex;

    this.searchService.currentSearch.subscribe(
      (result: SearchResult) => {
        this.posts = result.posts
        this.length = result.count
      },
      (error) => console.log(error)
    );

    this.searchService.search();
  }

  get pageSize(): number {
    return this.searchService.pageSize;
  }

  set pageSize(value: number) {
    this.searchService.pageSize = value;
  }

  get pageSizeOptions(): number[] {
    return this.searchService.pageSizeOptions;
  }

  set pageIndex(value: number) {
    this.searchService.pageIndex = value;
  }

  onPageChange(e: PageEvent) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.searchService.search();
  }
}
