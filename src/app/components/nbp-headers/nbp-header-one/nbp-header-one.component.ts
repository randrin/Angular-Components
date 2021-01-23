import { Component, Injector, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpSize, NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-header-one',
  templateUrl: './nbp-header-one.component.html',
  styleUrls: ['./nbp-header-one.component.scss']
})
export class NbpHeaderOneComponent extends NbpBaseComponent implements OnInit {

  model: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }


  // Functions
  logout() {
    console.log('{NbpHeaderOneComponent - logout}');
  }

  nbpInputModel(event) {
    this.model = event;
  }

}
