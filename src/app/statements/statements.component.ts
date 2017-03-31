import { AfterContentChecked, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bank-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }
  
  public ngOnInit() {
    this.route.data.subscribe((res: Object) => {
      console.log(res);
    });
    console.log(this.route.snapshot.params);
  }
  
}
