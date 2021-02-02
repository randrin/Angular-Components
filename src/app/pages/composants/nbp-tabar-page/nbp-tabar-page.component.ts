import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-tabar-page',
  templateUrl: './nbp-tabar-page.component.html',
  styleUrls: ['./nbp-tabar-page.component.scss']
})

export class NbpTabarPageComponent extends NbpBaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
