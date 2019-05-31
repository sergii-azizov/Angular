import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpService } from '../../services';
import { Articles } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends HttpService {
  public getArticles(): Observable<Articles> {
    return this.get('/public-api/users', {
        params: new HttpParams({
          fromObject: {
            _format: 'json',
            'access-token': 'Dy8SBSfQHuESrWtdvZRyDGKSCys-WKy6KSsw'
          }
        })
      }
    );
  }
}
