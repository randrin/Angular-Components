import { Component, Input, OnInit } from '@angular/core';
import { NbpAlertType } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-feedback',
  templateUrl: './nbp-feedback.component.html',
  styleUrls: ['./nbp-feedback.component.scss']
})
export class NbpFeedbackComponent implements OnInit {

  @Input() nbpTitle: string;
  @Input() nbpMessage: string;
  @Input() nbpFeedbackType: string;

  _feedbackType = NbpAlertType;
  
  nbpFeedbackIcon: string;
  nbpFeedbackColor: string;
  nbpSeparator: string = ' ';

  nbpIcon = {
    SUCCESS: 'fa fa-smile-o',
    WARNING: 'fa fa-meh-o',
    ERROR: 'fa fa-frown-o'
  }

  nbpColor = {
    SUCCESS: 'nbp-color-success',
    WARNING: 'nbp-color-warning',
    ERROR: 'nbp-color-danger',
  }

  constructor() { }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.nbpFeedbackIcon = this.nbpGetColorFeedback(this.nbpFeedbackType) + this.nbpSeparator + this.nbpFeedbackColor;
  }

  nbpGetColorFeedback(nbpInput) {
    if(nbpInput === this._feedbackType.POSITIVE || nbpInput === '' || nbpInput === undefined) {
      this.nbpFeedbackColor = this.nbpColor.SUCCESS;
      return this.nbpIcon.SUCCESS;
    }
    if(nbpInput === this._feedbackType.WARNING) {
      this.nbpFeedbackColor = this.nbpColor.WARNING;
      return this.nbpIcon.WARNING;
    }
    if(nbpInput === this._feedbackType.ERROR) {
      this.nbpFeedbackColor = this.nbpColor.ERROR;
      return this.nbpIcon.ERROR;
    }
  }
}
