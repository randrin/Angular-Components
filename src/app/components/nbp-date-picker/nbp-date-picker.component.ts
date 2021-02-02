import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-date-picker',
  templateUrl: './nbp-date-picker.component.html',
  styleUrls: ['./nbp-date-picker.component.scss']
})

export class NbpDatePickerComponent extends NbpBaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
