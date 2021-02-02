import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-filter-form-page',
  templateUrl: './nbp-filter-form-page.component.html',
  styleUrls: ['./nbp-filter-form-page.component.scss']
})

export class NbpFilterFormPageComponent extends NbpBaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
