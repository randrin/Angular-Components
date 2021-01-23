import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-breadcrumd-page',
  templateUrl: './nbp-breadcrumd-page.component.html',
  styleUrls: ['./nbp-breadcrumd-page.component.scss']
})
export class NbpBreadcrumdPageComponent extends NbpBaseComponent implements OnInit {

  title = 'Breadcrumbs Navigation';


  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions

}
