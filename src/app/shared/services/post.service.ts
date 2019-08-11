import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Post } from '../models/post';
import { environment } from '../../../environments/environment';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl: string = environment.apiUrl + '/post';

  private postDeletedSource = new BehaviorSubject<string>(" ");
  currentPostDeleted = this.postDeletedSource.asObservable();

  constructor(private http: HttpClient, private auth: AuthService) { }

  add(post: Post): Observable<any> {
    return this.http.post(this.postUrl, post).pipe();
  }

  get(id: string): Observable<Post> {
    const userId = this.auth.user == null ? null : this.auth.user.id;

    return this.http.get<Post>(this.postUrl, {
      params: { id: id, userId: userId}
    }).pipe();
  }

  update(post: Post): Observable<any> {
    return this.http.put(this.postUrl, post).pipe();
  }

  delete(id: string): Observable<any> {
    this.postDeletedSource.next(id);
    return this.http.delete(this.postUrl + `/${id}`).pipe();
  }
}
