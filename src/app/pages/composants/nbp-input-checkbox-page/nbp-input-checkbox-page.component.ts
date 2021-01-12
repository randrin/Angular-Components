import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-input-checkbox-page',
  templateUrl: './nbp-input-checkbox-page.component.html',
  styleUrls: ['./nbp-input-checkbox-page.component.scss']
})
export class NbpInputCheckboxPageComponent implements OnInit {

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
