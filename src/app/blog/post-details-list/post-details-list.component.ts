import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { Post } from 'src/app/shared/models/post';
import { SearchService } from 'src/app/shared/services/search.service';
import { PageEvent, MatPaginator } from '@angular/material';
import { SearchResult } from 'src/app/shared/models/search-result';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-details-list',
  templateUrl: './post-details-list.component.html',
  styleUrls: ['./post-details-list.component.css']
})
export class PostDetailsListComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  searcSubscribe: Subscription;
  postDeleteSubscribe: Subscription;

  
  posts: Post[] = [];
  length: number = 10;
  loading = false;

  constructor(
    private postService: PostService,
    private searchService: SearchService
    ) { }

  ngOnInit() {
    this.postDeleteSubscribe = this.postService.currentPostDeleted.subscribe(
      (id: string) => {
        this.posts = this.posts.filter(p => p.id != id);
        --this.length;
      }
      ,
      (error) => console.log(error)
    );

    this.paginator.pageIndex = this.searchService.pageIndex;

    this.loading = true;
    this.searcSubscribe = this.searchService.currentSearch.subscribe(
      (result: SearchResult) => {
        this.posts = result.posts
        this.length = result.count
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
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

  ngOnDestroy(): void {
    this.searcSubscribe.unsubscribe();
    this.postDeleteSubscribe.unsubscribe();
  }
}
