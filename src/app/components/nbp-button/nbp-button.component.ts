import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-button',
  templateUrl: './nbp-button.component.html',
  styleUrls: ['./nbp-button.component.scss']
})
export class NbpButtonComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpButtonLabel: string;
  @Input() nbpButtonColor: string;
  @Input() nbpButtonType: string;
  @Input() nbpButtonForm: string;
  @Input() nbpButtonSize: string;
  @Input() nbpButtonDisabled: boolean;

  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpGetClasses();
  }

  nbpGetClasses() {
    this.nbpButton = this.nbpGetButtonColorClasse(this.nbpButtonColor) + this.nbpSeparator + this.nbpGetButtonFormColorClasse(this.nbpButtonType, this.nbpButtonColor)
      + this.nbpSeparator + this.nbpGetSizeClasse(this.nbpButtonSize) + this.nbpSeparator + this.nbpGetFormClasse();
  }

  nbpGetFormClasse() {
    if (this.nbpButtonForm === this._style.ROUNDED) {
      return this._buttonStyleClasse.ROUNDED;
    }
  }
}
