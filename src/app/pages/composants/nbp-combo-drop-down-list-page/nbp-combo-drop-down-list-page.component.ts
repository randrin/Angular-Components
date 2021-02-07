import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-combo-drop-down-list-page',
  templateUrl: './nbp-combo-drop-down-list-page.component.html',
  styleUrls: ['./nbp-combo-drop-down-list-page.component.scss']
})

export class NbpComboDropDownListPageComponent extends NbpBaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
