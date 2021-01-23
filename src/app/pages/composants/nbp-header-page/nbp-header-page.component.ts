import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'app-nbp-header-page',
  templateUrl: './nbp-header-page.component.html',
  styleUrls: ['./nbp-header-page.component.scss']
})
export class NbpHeaderPageComponent extends NbpBaseComponent implements OnInit {

  title = 'Headers Page';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions

}
