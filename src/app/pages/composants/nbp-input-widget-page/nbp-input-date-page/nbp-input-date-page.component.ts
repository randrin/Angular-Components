import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-input-date-page',
  templateUrl: './nbp-input-date-page.component.html',
  styleUrls: ['./nbp-input-date-page.component.scss']
})

export class NbpInputDatePageComponent extends NbpBaseComponent implements OnInit {

  title1 = 'Input Date One Page';
  title2 = 'Input Date Two Page';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions
  nbpInputModel(event) {
    this.nbpModel = event;
    console.log("NbpDatePickerPageComponent: ", event)
  }
}
