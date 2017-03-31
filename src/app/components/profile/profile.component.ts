import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProfileAccountInfoComponent } from '../profile-account-info/profile-account-info.component';
import { DataHandlerService } from '../../services/data-handler.service';
import { SampleStateService } from '../../services/sample-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bank-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  
  @Input() public color: string = '#546e7a'; // Default input
  public paying: boolean;
  public payAnim: boolean;
  public state: string;
  private subscribers: Subscription[];
  
  // Avoid doing this unless really need to
  @ViewChild(ProfileAccountInfoComponent) public myInfo: ProfileAccountInfoComponent;
  
  constructor(private dataHandler: DataHandlerService, private sampleStateService: SampleStateService) {
    this.subscribers = [];
  }
  
  public ngOnInit() {
    this.paying = this.payAnim = false;
    this.listenForPayments();
    this.streamState();
    console.log(this.myInfo.accountNum, 'Accessing View Child');
  }
  
  public ngOnDestroy() {
    for (let i: number = 0; i < this.subscribers.length; i++) {
      this.subscribers[i].unsubscribe();
    }
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
    const sub1: Subscription = this.sampleStateService.streamState().subscribe((state: string) => {
      this.state = state;
    });
    this.subscribers.push(sub1);
  }
  
  public listenForPayments(): void {
    const sub2: Subscription = this.dataHandler.streamPayment().subscribe((val: boolean) => {
      console.log('Payment:', val);
      this.state = 'Payed';
    });
    this.subscribers.push(sub2);
  }
  
}
