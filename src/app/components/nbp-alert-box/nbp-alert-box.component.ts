import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbpAlertType, NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-alert-box',
  templateUrl: './nbp-alert-box.component.html',
  styleUrls: ['./nbp-alert-box.component.scss']
})
export class NbpAlertBoxComponent implements OnInit {

  @Input() nbpText: string;
  @Input() nbpClose: boolean;
  @Input() nbpAlertType: string;
  @Input() nbpColorStyle: string;

  @Output() nbpClickClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  _alertType = NbpAlertType;
  _style = NbpStyle;
  
  nbpAlertBoxTextColor: string;
  nbpAlertBoxType: string;
  nbpAlertBoxIcon: string;
  nbpAlertBoxBackground: string;
  nbpSeparator: string = ' ';

  nbpIcon = {
    GENERIC: 'fa fa-info-circle',
    POSITIVE: 'fa fa-check-circle-o',
    PROMOTIONAL: 'fa fa-percent',
    WARNING: 'fa fa-exclamation-circle',
    ERROR: 'fa fa-times-circle-o'
  }

  nbpBorder = {
    GENERIC: 'nbp-border-default',
    POSITIVE: 'nbp-border-success',
    PROMOTIONAL: 'nbp-border-info',
    WARNING: 'nbp-border-warning',
    ERROR: 'nbp-border-danger'
  }

  nbpBackground = {
    GENERIC: 'nbp-background-default',
    POSITIVE: 'nbp-background-success',
    PROMOTIONAL: 'nbp-background-info',
    WARNING: 'nbp-background-warning',
    ERROR: 'nbp-background-danger'
  }

  nbpColor = {
    DEFAULT: 'nbp-color-default',
    PRIMARY: 'nbp-color-primary',
    TOMATO: 'nbp-color-tomato',
    WHITE: 'nbp-color-white'
  }

  constructor() { }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpGetColorBoxAlert(this.nbpAlertType);
    this.nbpGetColorTextBoxAlert(this.nbpColorStyle);
  }

  nbpGetColorTextBoxAlert(nbpInput) {
    if (nbpInput === this._style.DEFAULT || nbpInput === '' || nbpInput === undefined) {
      this.nbpAlertBoxTextColor = this.nbpColor.DEFAULT;
    }
    if (nbpInput === this._style.PRIMARY) {
      this.nbpAlertBoxTextColor =  this.nbpColor.PRIMARY;
    }
    if (nbpInput === this._style.DANGER) {
      this.nbpAlertBoxTextColor =  this.nbpColor.TOMATO;
    }
    if (nbpInput === this._style.WHITE) {
      this.nbpAlertBoxTextColor =  this.nbpColor.WHITE;
    }
  }

  nbpGetColorBoxAlert(nbpInput) {
    if (nbpInput === this._alertType.GENERIC || nbpInput === '' || nbpInput === undefined) {
      this.nbpAlertBoxIcon = this.nbpIcon.GENERIC;
      this.nbpAlertBoxType = this.nbpBorder.GENERIC;
      this.nbpAlertBoxBackground = this.nbpBackground.GENERIC;
    }
    if (nbpInput === this._alertType.POSITIVE) {
      this.nbpAlertBoxIcon = this.nbpIcon.POSITIVE;
      this.nbpAlertBoxType = this.nbpBorder.POSITIVE;
      this.nbpAlertBoxBackground = this.nbpBackground.POSITIVE;
    }
    if (nbpInput === this._alertType.PROMOTIONAL) {
      this.nbpAlertBoxIcon = this.nbpIcon.PROMOTIONAL;
      this.nbpAlertBoxType = this.nbpBorder.PROMOTIONAL;
      this.nbpAlertBoxBackground = this.nbpBackground.PROMOTIONAL;
    }
    if (nbpInput === this._alertType.WARNING) {
      this.nbpAlertBoxIcon = this.nbpIcon.WARNING;
      this.nbpAlertBoxType = this.nbpBorder.WARNING;
      this.nbpAlertBoxBackground = this.nbpBackground.WARNING;
    }
    if (nbpInput === this._alertType.ERROR) {
      this.nbpAlertBoxIcon = this.nbpIcon.ERROR;
      this.nbpAlertBoxType = this.nbpBorder.ERROR;
      this.nbpAlertBoxBackground = this.nbpBackground.ERROR;
    }
  }

  nbpOnClickClose() {
    this.nbpClickClose.emit(true);
  }
}
