import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-tooltip',
  templateUrl: './nbp-tooltip.component.html',
  styleUrls: ['./nbp-tooltip.component.scss']
})
export class NbpTooltipComponent extends NbpBaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
