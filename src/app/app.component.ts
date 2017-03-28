import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bank-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public applicationName: string;
  
  constructor() {
  
  }
  
  public ngOnInit() {
    this.applicationName = 'My Banking Application';
  }
}
