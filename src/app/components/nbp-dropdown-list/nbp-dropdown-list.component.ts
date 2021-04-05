import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-nbp-dropdown-list',
  templateUrl: './nbp-dropdown-list.component.html',
  styleUrls: ['./nbp-dropdown-list.component.scss']
})
export class NbpDropdownListComponent extends NbpBaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {}

}
