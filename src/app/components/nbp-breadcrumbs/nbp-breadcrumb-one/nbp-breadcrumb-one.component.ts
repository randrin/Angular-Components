import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-breadcrumb-one',
  templateUrl: './nbp-breadcrumb-one.component.html',
  styleUrls: ['./nbp-breadcrumb-one.component.scss']
})
export class NbpBreadcrumbOneComponent extends NbpBaseComponent implements OnInit {

  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
  }

  // Functions

}
