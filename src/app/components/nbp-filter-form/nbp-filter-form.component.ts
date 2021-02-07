import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-filter-form',
  templateUrl: './nbp-filter-form.component.html',
  styleUrls: ['./nbp-filter-form.component.scss']
})
export class NbpFilterFormComponent extends NbpBaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
