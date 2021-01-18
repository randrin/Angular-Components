import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-feedback',
  templateUrl: './nbp-feedback.component.html',
  styleUrls: ['./nbp-feedback.component.scss']
})
export class NbpFeedbackComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpTitle: string;
  @Input() nbpMessage: string;
  @Input() nbpFeedbackType: string;
  
  nbpFeedbackIcon: string;
  nbpFeedbackColor: string;

  nbpIcon = {
    SUCCESS: 'fa fa-smile',
    WARNING: 'fa fa-meh',
    ERROR: 'fa fa-frown'
  }
  // nbpColor = {
  //   SUCCESS: 'nbp-color-success',
  //   WARNING: 'nbp-color-warning',
  //   ERROR: 'nbp-color-danger',
  // }

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpFeedbackIcon = this.nbpGetColorFeedback(this.nbpFeedbackType) + this.nbpSeparator + this.nbpFeedbackColor;
  }

  nbpGetColorFeedback(nbpInput) {
    if(nbpInput === this._feedbackType.POSITIVE || nbpInput === '' || nbpInput === undefined) {
      this.nbpFeedbackColor = this.nbpGetColorClasse(this._style.SUCCESS);
      return this.nbpIcon.SUCCESS;
    }
    if(nbpInput === this._feedbackType.WARNING) {
      this.nbpFeedbackColor = this.nbpGetColorClasse(this._style.WARNING);
      return this.nbpIcon.WARNING;
    }
    if(nbpInput === this._feedbackType.ERROR) {
      this.nbpFeedbackColor = this.nbpGetColorClasse(this._alertType.ERROR);
      return this.nbpIcon.ERROR;
    }
  }
}
