import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-panel-title-five',
  templateUrl: './nbp-panel-title-five.component.html',
  styleUrls: ['./nbp-panel-title-five.component.scss']
})
export class NbpPanelTitleFiveComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpPanelTitle: string;
  @Input() nbpPanelTitleStyle: string;
  
  constructor(injector:Injector) { 
    super(injector)
  }

  nbpPanel: string;

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpPanel = this.nbpGetColorClasse(this.nbpPanelTitleStyle) + this.nbpSeparator + this.nbpGetBackgroundPanelTitleClasse(this.nbpPanelTitleStyle);
    this.nbpAlertBoxIcon = this.nbpGetIconClasse(this.nbpPanelTitleStyle);
    this.nbpBorder = this.nbpGetBorderClasse(this.nbpPanelTitleStyle, this._border.LEFT);
  }
}
