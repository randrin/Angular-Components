import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-background-box',
  templateUrl: './nbp-background-box.component.html',
  styleUrls: ['./nbp-background-box.component.scss']
})
export class NbpBackgroundBoxComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpTitle: string;
  @Input() nbpTitlePosition: string;
  @Input() nbpSubTitle: string;
  @Input() nbpBackgroundStyle: string;
  @Input() nbpFontSize: string;
  @Input() nbpTextTransform: string;
  @Input() nbpColorStyle: string;

  nbpBackgroundBox: string;
  nbpColorBox: string;
  nbpTitleBox: string;

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpBackgroundBox = this.nbpGetBackgroundClasse(this.nbpBackgroundStyle);
    this.nbpColorBox = (this.nbpBackgroundStyle === this._style.DEFAULT || this.nbpBackgroundStyle === undefined) ?  this.nbpGetColorClasse(this._style.WHITE) : this.nbpGetColorClasse(this.nbpColorStyle);
    this.nbpTitleBox = this.nbpGetFontSizeClasse(this.nbpFontSize) + this.nbpSeparator + this.nbpGetTextAlignClasse(this.nbpTitlePosition) +
     this.nbpSeparator + this.nbpGetTextTransformClasse(this.nbpTextTransform);
  }
}
