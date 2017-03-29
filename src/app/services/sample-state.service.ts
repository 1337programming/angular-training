import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SampleStateService {
  
  private state: Subject<string>;
  
  constructor() {
    this.state = new Subject<string>();
  }
  
  public updateState(val: string): void {
    this.state.next(val);
  }
  
  public streamState(): Observable<string> {
    return this.state.asObservable();
  }
  
}
