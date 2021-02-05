import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-input-switch-page',
  templateUrl: './nbp-input-switch-page.component.html',
  styleUrls: ['./nbp-input-switch-page.component.scss']
})
export class NbpInputSwitchPageComponent extends NbpBaseComponent implements OnInit {

  constructor(injector: Injector) { super(injector)}

  title1 = 'Input Switch rounded 1 Page';
  title2 = 'Input Switch rounded 2 Page';

  ngOnInit(): void {
  }

  // Functions
  nbpToogleButtonOnClick(event) {
    console.log("nbpToogleButtonOnClick: ", event);
  }

}
