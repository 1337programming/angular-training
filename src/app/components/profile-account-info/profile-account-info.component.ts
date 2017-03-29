import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataHandlerService } from '../../services/data-handler.service';

@Component({
  selector: 'bank-profile-account-info',
  templateUrl: './profile-account-info.component.html',
  styleUrls: ['./profile-account-info.component.scss']
})
export class ProfileAccountInfoComponent implements OnInit {
  
  @Input() public routingNum: string;
  @Input() public accountNum: string;
  @Output() public onSubmit: EventEmitter<string>;
  public myStr: string;
  
  constructor(private dataHandler: DataHandlerService) {
    // Must instantiate input/outputs in constructor
    this.onSubmit = new EventEmitter<string>();
  }
  
  public ngOnInit() {
    this.listenForPayments();
  }
  
  public submit(str: string): void {
    this.onSubmit.next(str);
  }
  
  public listenForPayments(): void {
    this.dataHandler.streamPayment().subscribe((val: boolean) => {
      console.log('Payment:', val);
    });
  }
  
}
