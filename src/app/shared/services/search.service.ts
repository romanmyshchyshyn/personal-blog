import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { SearchOptions } from '../models/search-options';
import { SearchResult } from '../models/search-result';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  pageSize: number = 5;
  pageSizeOptions: number[] = [1, 5, 10, 25];
  pageIndex: number = 0;


  private searchText: string = "";
  private searchUrl: string = environment.apiUrl + '/post/search';

  private searchSource = new Subject<SearchOptions>();
  currentSearch = this.searchSource.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((options: SearchOptions) => this.getSearhPosts(options))
  );

  constructor(private http: HttpClient) { }

  search(data?: string) {
    if (typeof data != "undefined") {
      this.searchText = data;
      this.pageIndex = 0;
    }

    this.searchSource.next({data: this.searchText, pageIndex: this.pageIndex, pageSize: this.pageSize});
  }

  private getSearhPosts(options: SearchOptions): Observable<SearchResult> {
    return this.http.get<SearchResult>(this.searchUrl, {
      params : {data: options.data, pageIndex: options.pageIndex.toString(), pageSize: options.pageSize.toString()}
    }).pipe();
  }
}
