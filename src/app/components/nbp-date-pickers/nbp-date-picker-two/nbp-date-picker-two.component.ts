import { Component, EventEmitter, Injector, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';
import * as uuid from "uuid";

@Component({
  selector: 'nbp-date-picker-two',
  templateUrl: './nbp-date-picker-two.component.html',
  styleUrls: ['./nbp-date-picker-two.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NbpDatePickerTwoComponent extends NbpBaseComponent implements OnInit{

  @Input() nbpDatePickerLabel: string;
  @Input() nbpDatePickerValue: string;
  @Input() nbpDatePickerLabelRequired: boolean;
  @Input() nbpDatePickerBorderType: string;
  @Input() nbpDatePickerName: string;
  @Input() nbpDatePickerMinDate: string;
  @Input() nbpDatePickerMaxDate: string;
  @Input() nbpDatePickerIcon: string;
  @Input() nbpDatePickerIconRequired: boolean;
  @Input() nbpDatePickerPlaceholder: string;
  @Input() nbpDatePickerErrorMessage: string;
  @Input() nbpDatePickerRequired: boolean;
  @Input() nbpDatePickerDisabled: boolean;

  @Output()
  nbpDatePickerModel: EventEmitter<object> = new EventEmitter<object>();

  nbpModel: string = "";
  nbpDatePicker: string;
  nbpDatePickerId: string;
  nbpErrorBorder: string = "";
  nbpBorderType: string;
  nbpErrorMessage: boolean = false;

  constructor(injector: Injector) {
    super(injector);
  }


  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpDatePickerId = "nbp" + uuid.v4();
  }
}
