import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';
import * as uuid from 'uuid';

@Component({
  selector: 'nbp-input-password',
  templateUrl: './nbp-input-password.component.html',
  styleUrls: ['./nbp-input-password.component.scss']
})
export class NbpInputPasswordComponent extends NbpBaseComponent implements  OnInit  {

  @Input() nbpInputLabel: string;
  @Input() nbpInputLabelRequired: boolean;
  @Input() nbpInputName: string;
  @Input() nbpInputValue: string;
  @Input() nbpInputRequired: boolean;
  @Input() nbpInputDisabled: boolean;
  @Input() nbpInputBorderType: string;
  @Input() nbpInputIcon: string;
  @Input() nbpInputIconRequired: boolean;
  @Input() nbpInputPlaceholder: string;
  @Input() nbpInputType: string;
  @Input() nbpInputErrorMessage: string;

  @Output() nbpInputModel: EventEmitter<object> = new EventEmitter<object>();
  
  nbpModel: string = '';
  nbpInput: string;
  nbpInputId: string;
  nbpErrorBorder: string = '';
  nbpBorderType: string;
  nbpErrorMessage: boolean = false;
  nbpIsDigitText: boolean = false;
  nbpOnShowHideIcon: boolean = true;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpInputId = 'nbp-' + uuid.v4();
    this.nbpInputType = this.nbpInputType === undefined ? this.nbpInputDefault.password : this.nbpInputType;
    this.nbpBorderType = this.nbpGetTypeInputText(this.nbpInputBorderType);
    this.nbpGetClasses();
  }

  nbpGetClasses() {
    this.nbpInput = this.nbpInputDisabled ? this.nbpTypeInput.CURSOR : '';
    this.nbpInput = this.nbpInput + this.nbpSeparator + this.nbpBorderType + this.nbpSeparator + this.nbpErrorBorder;
    if(this.nbpErrorMessage) {
      this.nbpInputIcon = this.nbpInputIcon + this.nbpSeparator + "nbp-input-password-icon-message"
    }
    this.nbpInputModel.emit({value: this.nbpModel, name: this.nbpInputName});
  }

  nbpGetTypeInputText(nbpInput) {
    if (nbpInput === this._style.ROUNDED) {
      return this.nbpTypeInput.ROUNDED;
    }
  }

  nbpInputKeyUp() {
    if (this.nbpInputRequired) {
      this.nbpErrorBorder = (this.nbpModel.length === 0) ? this.nbpGetBorderClasse(this._alertType.ERROR, this._type.COLOR): '';
      this.nbpErrorMessage = (this.nbpModel.length === 0) ? true : false;
      this.nbpIsDigitText = (this.nbpModel.length >= 1) ? true : false;
      document.getElementById("nbp-input-password-icon").classList.remove("nbp-input-password-icon-message");
      this.nbpGetClasses();
    } else {
      this.nbpIsDigitText = (this.nbpModel.length >= 1) ? true : false;
    }
  }

  nbpInputBlur() {
  }

  nbpInputFocusOut() {
    if (this.nbpInputRequired) {
      this.nbpErrorMessage = (this.nbpModel.length === 0) ? true : false;
      this.nbpErrorBorder = (this.nbpModel.length === 0) ? this.nbpGetBorderClasse(this._alertType.ERROR, this._type.COLOR) : '';
      this.nbpGetClasses();
    }
  }

  nbpInputFocus() {
    this.nbpIsDigitText = (this.nbpModel.length === 0) ? false : true;
  }

  nbpInputOnClean() {
    if (this.nbpModel.length !== 0) {
      this.nbpModel = '';
      this.nbpIsDigitText = false;
      this.nbpInputModel.emit({value: this.nbpModel, name: this.nbpInputName});
      if (this.nbpInputRequired) {
        this.nbpInput = this.nbpBorderType + this.nbpSeparator + this.nbpGetBorderClasse(this._alertType.ERROR, this._type.COLOR);
        this.nbpInputIcon = this.nbpInputIcon + this.nbpSeparator + "nbp-input-password-icon-message"
        this.nbpErrorMessage = true;
      }
    }
  }

  nbpInputOnShowHide() {
    if(this.nbpInputType === this.nbpInputDefault.password) {
      this.nbpInputType = this.nbpInputDefault.text;
      this.nbpInputIcon = this.nbpInputPasswordIcon.SHOW;
    } else {
      this.nbpInputType = this.nbpInputDefault.password;
      this.nbpInputIcon = this.nbpInputPasswordIcon.HIDE;
    }
    this.nbpInputKeyUp();
  }
}
