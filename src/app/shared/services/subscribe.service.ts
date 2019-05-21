import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  private subscribeUrl: string = environment.apiUrl + '/user/subscribe';

  constructor(private http: HttpClient, private auth: AuthService) { }

  subscribe(action: boolean): Observable<any> {
    return this.http.get(this.subscribeUrl, { params: { action: String(action) } }).pipe(
      tap(() => this.auth.user = {...this.auth.user, isSubscribed: action})
    );
  }

}
