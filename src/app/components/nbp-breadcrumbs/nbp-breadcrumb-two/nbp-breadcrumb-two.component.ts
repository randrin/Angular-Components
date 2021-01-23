import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-breadcrumb-two',
  templateUrl: './nbp-breadcrumb-two.component.html',
  styleUrls: ['./nbp-breadcrumb-two.component.scss']
})
export class NbpBreadcrumbTwoComponent extends NbpBaseComponent implements OnInit {

  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
  }

  // Functions

}
