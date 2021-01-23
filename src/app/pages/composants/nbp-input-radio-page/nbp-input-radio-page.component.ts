import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';


@Component({
  selector: 'nbp-input-radio-page',
  templateUrl: './nbp-input-radio-page.component.html',
  styleUrls: ['./nbp-input-radio-page.component.scss']
})
export class NbpInputRadioPageComponent extends NbpBaseComponent implements OnInit {

  title = 'Input Radios Page';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
