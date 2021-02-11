import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-modal-page',
  templateUrl: './nbp-modal-page.component.html',
  styleUrls: ['./nbp-modal-page.component.scss']
})
export class NbpModalPageComponent extends NbpBaseComponent implements OnInit {

  title1 = "Modal with Header Style";

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }


  // Functions
}
