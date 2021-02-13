import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-panel-title-three',
  templateUrl: './nbp-panel-title-three.component.html',
  styleUrls: ['./nbp-panel-title-three.component.scss']
})
export class NbpPanelTitleThreeComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpPanelTitle: string;
  @Input() nbpPanelTitleStyle: string;

  constructor(injector:Injector) {
    super(injector)
   }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpBorder = this.nbpGetBorderClasse(this.nbpPanelTitleStyle, this._type.TOP);
  }
}
