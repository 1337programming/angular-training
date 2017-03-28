import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bank-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  public removing: boolean;
  public removeAnim: boolean;
  
  constructor() {
  }
  
  public ngOnInit() {
    this.removing = this.removeAnim = false;
  }
  
  public remove(): void {
  
  }
  
  public toggleRemove(val: boolean): void {
    this.removing = val;
    setTimeout(() => {
      this.removeAnim = val;
    }, 300);
  }
  
}
