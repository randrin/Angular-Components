import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-combo-drop-down-list',
  templateUrl: './nbp-combo-drop-down-list.component.html',
  styleUrls: ['./nbp-combo-drop-down-list.component.scss']
})
export class NbpComboDropDownListComponent extends NbpBaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }


  ngOnInit(): void {
  }

}
