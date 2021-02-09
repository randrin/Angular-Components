import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-panel-title-page',
  templateUrl: './nbp-panel-title-page.component.html',
  styleUrls: ['./nbp-panel-title-page.component.scss']
})
export class NbpPanelTitlePageComponent extends NbpBaseComponent implements OnInit {

  title1 = 'Panels Title Page';
  title2 = 'Panels Title Page with Header Background';
  title3 = 'Panel Title with Border Top Color';
  title4 = 'Panel Title with Border Left Color';
  title5 = 'Panel Title with  Header Background and Border Left Color';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
