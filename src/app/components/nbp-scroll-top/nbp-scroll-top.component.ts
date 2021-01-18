import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-scroll-top',
  templateUrl: './nbp-scroll-top.component.html',
  styleUrls: ['./nbp-scroll-top.component.scss']
})
export class NbpScrollTopComponent extends NbpBaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions

}
