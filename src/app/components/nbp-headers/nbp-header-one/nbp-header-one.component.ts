import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpSize, NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-header-one',
  templateUrl: './nbp-header-one.component.html',
  styleUrls: ['./nbp-header-one.component.scss']
})
export class NbpHeaderOneComponent implements OnInit {

  _style = NbpStyle;
  _size = NbpSize;
  _model = new Model();

  model: string;

  constructor() { }

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
