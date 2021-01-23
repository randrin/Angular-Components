import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-footer-one',
  templateUrl: './nbp-footer-one.component.html',
  styleUrls: ['./nbp-footer-one.component.scss']
})
export class NbpFooterOneComponent extends NbpBaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions

}
