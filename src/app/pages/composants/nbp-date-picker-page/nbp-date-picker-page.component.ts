import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-date-picker-page',
  templateUrl: './nbp-date-picker-page.component.html',
  styleUrls: ['./nbp-date-picker-page.component.scss']
})

export class NbpDatePickerPageComponent extends NbpBaseComponent implements OnInit {

  title = 'Date Picker Page';

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
