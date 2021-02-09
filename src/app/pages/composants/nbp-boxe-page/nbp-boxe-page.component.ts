import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-boxe-page',
  templateUrl: './nbp-boxe-page.component.html',
  styleUrls: ['./nbp-boxe-page.component.scss']
})
export class NbpBoxePageComponent extends NbpBaseComponent implements OnInit {

  title = 'Boxe One';

  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
  }

  // Functions

}
