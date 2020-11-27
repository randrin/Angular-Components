import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
    GENERIC: 'npb-border-default',
    POSITIVE: 'npb-border-success',
    PROMOTIONAL: 'npb-border-info',
    WARNING: 'npb-border-warning',
    ERROR: 'npb-border-danger'
  }

  nbpBackground = {
    GENERIC: 'npb-background-generic',
    POSITIVE: 'npb-background-success',
    PROMOTIONAL: 'npb-background-info',
    WARNING: 'npb-background-warning',
    ERROR: 'npb-background-danger'
  }

  constructor() { }

  ngOnInit(): void {
    this.nbpSetUpComponent();
    console.log('{NbpAlertBoxComponent - this.nbpColorStyle}: ', this.nbpColorStyle);
  }

  nbpSetUpComponent() {
    this.nbpGetColorBoxAlert(this.nbpAlertType);
  }

  nbpGetColorBoxAlert(nbpInput) {
    if (nbpInput === 'GENERIC' || nbpInput === '' || nbpInput === undefined) {
      this.nbpAlertBoxIcon = this.nbpIcon.GENERIC;
      this.nbpAlertBoxType = this.nbpBorder.GENERIC;
      this.nbpAlertBoxBackground = this.nbpBackground.GENERIC;
    }
    if (nbpInput === 'POSITIVE') {
      this.nbpAlertBoxIcon = this.nbpIcon.POSITIVE;
      this.nbpAlertBoxType = this.nbpBorder.POSITIVE;
      this.nbpAlertBoxBackground = this.nbpBackground.POSITIVE;
    }
    if (nbpInput === 'PROMOTIONAL') {
      this.nbpAlertBoxIcon = this.nbpIcon.PROMOTIONAL;
      this.nbpAlertBoxType = this.nbpBorder.PROMOTIONAL;
      this.nbpAlertBoxBackground = this.nbpBackground.PROMOTIONAL;
    }
    if (nbpInput === 'WARNING') {
      this.nbpAlertBoxIcon = this.nbpIcon.WARNING;
      this.nbpAlertBoxType = this.nbpBorder.WARNING;
      this.nbpAlertBoxBackground = this.nbpBackground.WARNING;
    }
    if (nbpInput === 'ERROR') {
      this.nbpAlertBoxIcon = this.nbpIcon.ERROR;
      this.nbpAlertBoxType = this.nbpBorder.ERROR;
      this.nbpAlertBoxBackground = this.nbpBackground.ERROR;
    }
  }

  nbpOnClickClose() {
    this.nbpClickClose.emit(true);
  }
}
