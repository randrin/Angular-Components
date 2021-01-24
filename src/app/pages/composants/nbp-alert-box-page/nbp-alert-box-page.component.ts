import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';


@Component({
  selector: 'nbp-alert-box-page',
  templateUrl: './nbp-alert-box-page.component.html',
  styleUrls: ['./nbp-alert-box-page.component.scss']
})
export class NbpAlertBoxPageComponent extends NbpBaseComponent implements OnInit {

  title1 = 'Alert Box Page with icon and border background';
  title2 = 'Alert Box Page without background';
  title3 = 'Alert Box Page with background';
  title4 = 'Alert Box Page with border top';
  title5 = 'Alert Box Page with border left';


  nbpAlertClose: boolean;
  
  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions
  nbpOnClickClose(event) {
    console.log('{nbpOnClickClose}: ', this.nbpAlertClose);
    this.nbpAlertClose = event;
  }

}
