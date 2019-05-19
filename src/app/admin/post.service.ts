import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../shared/models/post';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl: string = environment.apiUrl + '/post';

  constructor(private http: HttpClient) { }

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
    return this.http.delete(this.postUrl + `/${id}`).pipe();
  }
}
