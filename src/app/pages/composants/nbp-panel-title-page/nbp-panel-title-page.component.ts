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
  title3 = 'Panel Title with border left color';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
