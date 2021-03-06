import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-alert-box-fourth',
  templateUrl: './nbp-alert-box-fourth.component.html',
  styleUrls: ['./nbp-alert-box-fourth.component.scss']
})
export class NbpAlertBoxFourthComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpAlertText: string;
  @Input() nbpAlertType: string;

  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

   // Functions
   nbpSetUpComponent() {
    this.nbpAlertBoxIcon = this.nbpGetIconClasse(this.nbpAlertType);
    this.nbpAlertBoxType = this.nbpGetBorderClasse(this.nbpAlertType, this._type.TOP);
    this.nbpAlertBoxColor = this.nbpGetColorClasse(this.nbpAlertType);
    this.nbpAlertBoxBackground = this.nbpGetBackgroundBoxAlertClasse(this.nbpAlertType);
  }
}
