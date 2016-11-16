import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import './rxjs-operators';

import {mapTastingToRequestObject, mapResponseToTastings} from './mapper';
import {Tasting, Beer} from './entities';
import {mockTastings} from './mock-tastings';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TastingService {
  private baseUrl = 'http://localhost:5000/api/tastings';

  constructor(private http: Http) {}

  getTastings(): Promise<Tasting[]> {
    return this.http.get(this.baseUrl)
                    .map(this.extractArray)
                    .map(mapResponseToTastings)
                    .toPromise();
  }

  insertTasting(newTasting: Tasting): Promise<string> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.baseUrl, mapTastingToRequestObject(newTasting), options)
                    .map(this.extractString)
                    .toPromise();
  }

  deleteTasting(tasting: Tasting): Promise<string> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.delete(`${this.baseUrl}/${tasting.id}`, options)
                    .map(this.extractString)
                    .toPromise();
  }

  private extractString(res: Response) {
    return res.toString();
  }

  private extractArray(res: Response) {
    const body = res.json();
    return body || [];
  }
}
