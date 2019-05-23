import { Component } from '@angular/core';
import { HttpService } from '../../services';

import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'HomePageComponent',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export default class {
  constructor(private http: HttpService) {
    const request = this.http.get('/public-api/users', {
      params: new HttpParams({
        fromObject: {
          _format: 'json',
          'access-token': 'Dy8SBSfQHuESrWtdvZRyDGKSCys-WKy6KSsw'
        }
      })
    }).subscribe(data => {
      console.log('==>', data);
    });

    //request.unsubscribe();
  }
}
