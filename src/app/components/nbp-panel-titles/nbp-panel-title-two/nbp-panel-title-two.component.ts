import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-panel-title-two',
  templateUrl: './nbp-panel-title-two.component.html',
  styleUrls: ['./nbp-panel-title-two.component.scss']
})
export class NbpPanelTitleTwoComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpPanelTitle: string;
  @Input() nbpPanelTitleStyle: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpBackground = this.nbpGetBackgroundClasse(this.nbpPanelTitleStyle);
  }
}
