import { Component, OnInit } from '@angular/core';
import { SampleStateService } from '../../services/sample-state.service';

@Component({
  selector: 'bank-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public applicationName: string;
  public state: string;
  public preState: string;
  
  constructor(private sampleStateService: SampleStateService) {
  }
  
  public ngOnInit() {
    this.applicationName = 'My Banking Application';
    this.streamState();
  }
  
  public streamState(): void {
    this.sampleStateService.streamState().subscribe((state: string) => {
      this.state = state;
    });
  }
  
  public updateState(str: string): void {
    this.sampleStateService.updateState(str);
  }

}
