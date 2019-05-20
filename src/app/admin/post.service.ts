import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Post } from '../shared/models/post';
import { environment } from '../../environments/environment';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { PostFilter } from '../shared/filters/post.filter';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl: string = environment.apiUrl + '/post';

  private postDeletedSource = new BehaviorSubject<string>(" ");
  currentPostDeleted = this.postDeletedSource.asObservable();

  private postsSearchSource = new Subject<string>();
  currentPostsSearch = this.postsSearchSource.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((data: string) => this.getByFilter(data))
  );

  constructor(private http: HttpClient) { }

  getByFilter(data: string): Observable<Post[]> {
    console.log("getByFilter: " + data);
    

    return this.http.get<Post[]>(this.postUrl + '/search', {
      params : {data}
    }).pipe();
  }

  search(data: string) {
    console.log("NEXT: " + data);
    
    this.postsSearchSource.next(data)
  }

  add(post: Post): Observable<any> {
    return this.http.post(this.postUrl, post).pipe();
  }

  getAll(): Observable<Post[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.get<Post[]>(this.postUrl, httpOptions).pipe();
  }

  get(id: string): Observable<Post> {
    return this.http.get<Post>(this.postUrl + `/${id}`).pipe();
  }

  update(post: Post): Observable<any> {
    return this.http.put(this.postUrl, post).pipe();
  }

  delete(id: string): Observable<any> {
    this.postDeletedSource.next(id);
    return this.http.delete(this.postUrl + `/${id}`).pipe();
  }
}
