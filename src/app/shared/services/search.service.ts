import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchOptions } from '../models/search-options';
import { SearchResult } from '../models/search-result';
import { AuthService } from 'src/app/auth/auth.service';
import { SearchTypeEnum } from '../enums/search-type.enum';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  pageSize: number = 5;
  pageSizeOptions: number[] = [3, 5, 10, 25];
  pageIndex: number = 0;
  searchType: SearchTypeEnum = SearchTypeEnum.Latest;

  private searchText: string = "";
  private searchUrl: string = environment.apiUrl + '/post/search';

  private searchSource = new Subject<SearchOptions>();
  currentSearch = this.searchSource.pipe(
    switchMap((options: SearchOptions) => this.getSearhPosts(options))
  );

  constructor(private http: HttpClient, private auth: AuthService) { }

  search(data?: string) {
    if (typeof data != "undefined") {
      this.searchText = data;
      this.pageIndex = 0;
    }

    const userId = this.auth.user == null ? null : this.auth.user.id;

    this.searchSource.next({ data: this.searchText, pageIndex: this.pageIndex, pageSize: this.pageSize, userId: userId});
  }

  private getSearhPosts(options: SearchOptions): Observable<SearchResult> {
    return this.http.get<SearchResult>(this.searchUrl, {
      params : {
        data: options.data, 
        pageIndex: options.pageIndex.toString(), 
        pageSize: options.pageSize.toString(), 
        userId: options.userId,
        searchType: this.searchType.toString()
      }
    }).pipe();
  }
}
