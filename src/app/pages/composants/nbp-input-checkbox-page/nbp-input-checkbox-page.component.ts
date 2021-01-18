import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-input-checkbox-page',
  templateUrl: './nbp-input-checkbox-page.component.html',
  styleUrls: ['./nbp-input-checkbox-page.component.scss']
})
export class NbpInputCheckboxPageComponent extends NbpBaseComponent implements OnInit {

  title = 'Checkbox Page';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
  
  // Functions
  nbpCheckBoxModel(event) {
    console.log('nbpCheckBoxModel:', event)
  }

}
