import { Component, OnInit } from '@angular/core';
import { StatementInfoService } from './services/statement-info.service';

@Component({
  selector: 'bank-statement-info',
  templateUrl: './statement-info.component.html',
  styleUrls: ['./statement-info.component.scss'],
  providers: [StatementInfoService]
})
export class StatementInfoComponent implements OnInit {
  
  constructor(private statementInfo: StatementInfoService) {
  }
  
  ngOnInit() {
  }
  
}
