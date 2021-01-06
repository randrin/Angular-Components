import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-checkbox-page',
  templateUrl: './nbp-checkbox-page.component.html',
  styleUrls: ['./nbp-checkbox-page.component.scss']
})
export class NbpCheckboxPageComponent implements OnInit {

  title = 'Checkbox Page';

  _style = NbpStyle;
  _model = new Model();

  constructor() { }

  ngOnInit(): void {
  }
  
  // Functions
  nbpCheckBoxModel(event) {
    console.log('nbpCheckBoxModel:', event)
  }

}
