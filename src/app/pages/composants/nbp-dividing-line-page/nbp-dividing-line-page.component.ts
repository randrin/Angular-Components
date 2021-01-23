import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-dividing-line-page',
  templateUrl: './nbp-dividing-line-page.component.html',
  styleUrls: ['./nbp-dividing-line-page.component.scss']
})
export class NbpDividingLinePageComponent extends NbpBaseComponent implements OnInit {

  title = 'Dividing Line Page';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }


  // Functions
  nbpOnClickCta(event) {
    console.log('{nbpOnClickCta}: ', event);
    // this.nbpShowPrimaryButtons = event;
  }
  
}
