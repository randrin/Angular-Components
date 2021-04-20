import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-input-select-page',
  templateUrl: './nbp-input-select-page.component.html',
  styleUrls: ['./nbp-input-select-page.component.scss']
})

export class NbpInputSelectPageComponent extends NbpBaseComponent implements OnInit {

  title1 = 'Input Select Page';
  title2 = 'Input Select Multi Select List Page';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions
  nbpInputModel(event) {
    this.nbpModel = event;
    console.log("NbpInputSelectPageComponent: ", event)
  }
}
