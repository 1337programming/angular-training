import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProfileAccountInfoComponent } from '../profile-account-info/profile-account-info.component';
import { DataHandlerService } from '../../services/data-handler.service';
import { SampleStateService } from '../../services/sample-state.service';

@Component({
  selector: 'bank-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  @Input() public color: string = '#546e7a'; // Default input
  public paying: boolean;
  public payAnim: boolean;
  public state: string;
  
  // Avoid doing this unless really need to
  @ViewChild(ProfileAccountInfoComponent) public myInfo: ProfileAccountInfoComponent;
  
  constructor(private dataHandler: DataHandlerService, private sampleStateService: SampleStateService) {
  }
  
  public ngOnInit() {
    this.paying = this.payAnim = false;
    this.listenForPayments();
    this.streamState();
    console.log(this.myInfo.accountNum, 'Accessing View Child');
  }
  
  public pay(): void {
    this.dataHandler.firePayment();
    this.togglePay(false);
  }
  
  public togglePay(val: boolean): void {
    this.paying = val;
    setTimeout(() => {
      this.payAnim = val;
    }, 300);
  }
  
  public changeState(str: string): void {
    this.state = str;
    // this.sampleStateService.updateState(str);
  }
  
  public streamState(): void {
    this.sampleStateService.streamState().subscribe((state: string) => {
      this.state = state;
    });
  }
  
  public listenForPayments(): void {
    this.dataHandler.streamPayment().subscribe((val: boolean) => {
      console.log('Payment:', val);
      this.state = 'Payed';
    });
  }
  
}
