import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-label-one',
  templateUrl: './nbp-label-one.component.html',
  styleUrls: ['./nbp-label-one.component.scss']
})
export class NbpLabelOneComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpLabelName: string;
  @Input() nbpLabelIcon: string;
  @Input() nbpLabelStyle: string;
  @Input() nbpLabelType: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    // Only the outline is accepted, otherwise nothing.
    this.nbpLabelType = this.nbpLabelType === this._style.OUTLINE ? this.nbpLabelType : undefined;
    this.nbpLabel = this.nbpLabelType === undefined ? this.nbpGetBadgeClasse(this.nbpLabelStyle) : this.nbpGetBadgeOutlineClasse(this.nbpLabelStyle);
  }
}
