import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataHandlerService } from '../../services/data-handler.service';

@Injectable()
export class StatementService {
  
  constructor(private dataHandler: DataHandlerService) {
  }
  
  public getData(): Observable<string> {
    return this.dataHandler.getData('statement');
  }
}
