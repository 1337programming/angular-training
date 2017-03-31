import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatementService } from '../../../services/statement.service';

@Injectable()
export class StatementInfoService {
  
  constructor(private statementSerivce: StatementService) {
  }
  
  public getInfo(): Observable<string> {
    return this.statementSerivce.getData();
  }
  
}
