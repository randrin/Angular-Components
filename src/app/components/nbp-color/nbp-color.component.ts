import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-color',
  templateUrl: './nbp-color.component.html',
  styleUrls: ['./nbp-color.component.scss']
})
export class NbpColorComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpColorStyle: string;
  @Input() nbpColorName: string;
  @Input() nbpColorCode: string;

  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpBorder = this.nbpGetBorderClasse(this.nbpColorStyle, this._type.BORDER);
    this.nbpBackground = this.nbpGetBackgroundClasse(this.nbpColorStyle);
    this.nbpColor = this.nbpBorder + this.nbpSeparator + this.nbpBackground;
  }
}
