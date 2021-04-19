import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-input-text-page',
  templateUrl: './nbp-input-text-page.component.html',
  styleUrls: ['./nbp-input-text-page.component.scss']
})
export class NbpInputTextPageComponent extends NbpBaseComponent implements OnInit {

  title = 'Input Text Page';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions
  nbpInputModel(event) {
    this.nbpModel = event;
  }

}
