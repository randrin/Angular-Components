import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-toggle-button-page',
  templateUrl: './nbp-toggle-button-page.component.html',
  styleUrls: ['./nbp-toggle-button-page.component.scss']
})
export class NbpToggleButtonPageComponent extends NbpBaseComponent implements OnInit {

  constructor(injector: Injector) { super(injector)}

  title1 = 'Toogle Button rounded 1 Page';
  title2 = 'Toogle Button rounded 2 Page';

  ngOnInit(): void {
  }

  // Functions
  nbpToogleButtonOnClick(event) {
    console.log("nbpToogleButtonOnClick: ", event);
  }

}
