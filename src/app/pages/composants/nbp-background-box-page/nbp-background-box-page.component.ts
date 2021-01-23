import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-background-box-page',
  templateUrl: './nbp-background-box-page.component.html',
  styleUrls: ['./nbp-background-box-page.component.scss']
})
export class NbpBackgroundBoxPageComponent extends NbpBaseComponent implements OnInit {

  title = 'Background Box Page';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions

}
