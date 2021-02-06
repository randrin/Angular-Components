import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-input-password-page',
  templateUrl: './nbp-input-password-page.component.html',
  styleUrls: ['./nbp-input-password-page.component.scss']
})
export class NbpInputPasswordPageComponent extends NbpBaseComponent implements OnInit {

  title = 'Input Password Page';

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
