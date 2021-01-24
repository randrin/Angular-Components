import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-alert-box-three',
  templateUrl: './nbp-alert-box-three.component.html',
  styleUrls: ['./nbp-alert-box-three.component.scss']
})
export class NbpAlertBoxThreeComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpText: string;
  @Input() nbpAlertType: string;

  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpAlertBoxIcon = this.nbpGetIconClasse(this.nbpAlertType);
    this.nbpAlertBoxType = this.nbpGetBorderClasse(this.nbpAlertType, this._border.BORDER);
    this.nbpAlertBoxColor = this.nbpGetColorClasse(this.nbpAlertType);
    this.nbpAlertBoxBackground = this.nbpGetBackgroundBoxAlertClasse(this.nbpAlertType);;
  }
}
