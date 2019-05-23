import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RequestOptions } from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private domain = 'https://gorest.co.in';

  public constructor(private http: HttpClient) {}

  public get(url: string, options?: RequestOptions): Observable<object> {
    return this.http.get(this.domain + url, options);
  }

  public post(url: string, params: object, options?: RequestOptions): Observable<object> {
    return this.http.post(this.domain + url, params, options);
  }

  public put(url: string, params: object, options?: RequestOptions): Observable<object> {
    return this.http.put(this.domain + url, params, options);
  }

  public delete(url: string, options?: RequestOptions): Observable<object> {
    return this.http.delete(this.domain + url, options);
  }
}
