import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl: string = environment.apiUrl + '/signin/';
  redirectUrl: string;
  inBrowser: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.inBrowser = isPlatformBrowser(platformId);
  }

  signin(name: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { name, password }).pipe(
      tap((token: any) =>  this.token = token),
    );
  }

  get isLoggedIn(): boolean {
    return !!this.token;
  }

  redirectLogin() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.token = null;
  }

  private set token(token: string) {
    if (!token) {
      localStorage.removeItem('auth-token');
    } else {
      localStorage.setItem('auth-token', token);
    }
  }

  private get token(): string {
    if (this.inBrowser) {
      return localStorage.getItem('auth-token');
    } else {
      return null;
    }
  }

  addHeaders(headers: HttpHeaders): HttpHeaders {
    return headers.set('Authorization', 'Bearer ' + this.token);
  }
}
