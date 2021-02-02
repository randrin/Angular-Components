import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-tooltip-page',
  templateUrl: './nbp-tooltip-page.component.html',
  styleUrls: ['./nbp-tooltip-page.component.scss']
})
export class NbpTooltipPageComponent extends NbpBaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}