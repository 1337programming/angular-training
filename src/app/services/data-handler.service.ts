import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Checkbook } from '../models/checkbook';

@Injectable()
export class DataHandlerService {
  
  constructor(private http: Http) {
  }
  
  public getMoney(): Observable<Checkbook> {
    return this.http.get('http://dellsfargo.com/39212123-phani').map((res: Response) => {
      return res.json();
    });
  }
  
}
