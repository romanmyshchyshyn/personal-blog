import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchText: string = "";
  private searchUrl: string = environment.apiUrl + '/post/search';

  private searchSource = new Subject<string>();
  currentSearch = this.searchSource.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((data: string) => this.getSearhPosts(data))
  );

  constructor(private http: HttpClient) { }

  search(data?: string) {
    if (data) {
      this.searchText = data;
    }

    this.searchSource.next(this.searchText);
  }

  private getSearhPosts(data: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.searchUrl, {
      params : {data}
    }).pipe();
  }
}
