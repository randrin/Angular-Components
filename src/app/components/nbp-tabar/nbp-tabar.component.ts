import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-tabar',
  templateUrl: './nbp-tabar.component.html',
  styleUrls: ['./nbp-tabar.component.scss']
})
export class NbpTabarComponent extends NbpBaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
