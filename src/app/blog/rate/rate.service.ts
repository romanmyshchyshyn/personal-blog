import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RateModel } from './rate-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  private url: string = environment.apiUrl + '/rate/';

  constructor(private http: HttpClient) { }

  public add(model: RateModel): Observable<any> {
    return this.http.post(this.url, model);
  }

  public update(model: RateModel): Observable<any> {
    return this.http.put(this.url, model);
  }
}
