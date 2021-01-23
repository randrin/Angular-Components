import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-button-page',
  templateUrl: './nbp-button-page.component.html',
  styleUrls: ['./nbp-button-page.component.scss']
})
export class NbpButtonPageComponent extends NbpBaseComponent implements OnInit {

  title = 'Button Page with defaut hover';
  titleHover = 'Button Page with inverse hover';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions

}
