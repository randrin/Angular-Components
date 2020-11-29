import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-input-text',
  templateUrl: './nbp-input-text.component.html',
  styleUrls: ['./nbp-input-text.component.scss']
})
export class NbpInputTextComponent implements OnInit {

  @Input() nbpInputLabel: string;
  @Input() nbpInputLabelRequired: boolean;
  @Input() nbpInputName: string;
  @Input() nbpInputRequired: boolean;
  @Input() nbpInputDisabled: boolean;
  @Input() nbpInputBorderType: string;
  @Input() nbpInputIcon: string;
  @Input() nbpInputIconRequired: boolean;
  @Input() nbpInputPlaceholder: string;
  @Input() nbpInputType: string = 'text';
  @Input() nbpInputErrorMessage: string;

  @Output() nbpInputModel: EventEmitter<string> = new EventEmitter<string>();

  _style = NbpStyle;

  nbpModel: string = '';
  nbpInput: string;
  nbpErrorBorder: string = '';
  nbpBorderType: string;
  nbpErrorMessage: boolean = false;
  nbpIsDigitText: boolean = false;
  nbpCleanInput: string = 'fa fa-times-circle';
  nbpSeparator: string = ' ';

  nbpBorder = {
    GENERIC: 'npb-border-default',
    POSITIVE: 'npb-border-success',
    PROMOTIONAL: 'npb-border-info',
    WARNING: 'npb-border-warning',
    ERROR: 'npb-border-danger'
  }

  nbpTypeInput = {
    ROUNDED: 'npb-rounded'
  }

  constructor() { }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.nbpBorderType = this.nbpGetTypeInputText(this.nbpInputBorderType);
    this.nbpGetClasses();
  }

  nbpGetClasses() {
    this.nbpInput = this.nbpBorderType + this.nbpSeparator + this.nbpErrorBorder;
    this.nbpInputModel.emit(this.nbpModel);
  }

  nbpGetTypeInputText(nbpInput) {
    if (nbpInput === this._style.ROUNDED) {
      return this.nbpTypeInput.ROUNDED;
    }
  }

  nbpInputKeyUp() {
    if (this.nbpInputRequired) {
      this.nbpErrorBorder = (this.nbpModel.length === 0) ? this.nbpBorder.ERROR : '';
      this.nbpErrorMessage = (this.nbpModel.length === 0) ? true : false;
      this.nbpIsDigitText = (this.nbpModel.length >= 1) ? true : false;
      this.nbpGetClasses();
    }

  }

  nbpInputFocusOut() {
    if (this.nbpInputRequired) {
      this.nbpErrorMessage = (this.nbpModel.length === 0) ? true : false;
      this.nbpErrorBorder = (this.nbpModel.length === 0) ? this.nbpBorder.ERROR : '';
      this.nbpGetClasses();
    }
  }

  nbpInputOnClean() {
    this.nbpModel = '';
    this.nbpIsDigitText = false;
    this.nbpInputModel.emit(this.nbpModel);
  }

}
