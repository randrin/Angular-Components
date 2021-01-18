import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-breadcrumd-three',
  templateUrl: './nbp-breadcrumd-three.component.html',
  styleUrls: ['./nbp-breadcrumd-three.component.scss']
})
export class NbpBreadcrumdThreeComponent extends NbpBaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
