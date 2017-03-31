import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Observer, Subject } from 'rxjs';
import { Checkbook } from '../models/checkbook';

@Injectable()
export class DataHandlerService {
  
  private payment: Subject<boolean>;
  
  constructor(private http: Http) {
    this.payment = new Subject<boolean>();
  }
  
  public getMoney(): Observable<Checkbook> {
    return this.http.get('http://dellsfargo.com/39212123-phani').map((res: Response) => {
      return res.json();
    });
  }
  
  public firePayment(): void {
    this.payment.next(true);
  }
  
  public streamPayment(): Observable<boolean> {
    return this.payment.asObservable();
  }
  
  public getData(type: string): Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      if (type === 'statement') {
        observer.next('Data');
      } else {
        observer.error('Incorrect');
      }
    });
  }
  
}
