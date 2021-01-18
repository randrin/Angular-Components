import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-table-page',
  templateUrl: './nbp-table-page.component.html',
  styleUrls: ['./nbp-table-page.component.scss']
})
export class NbpTablePageComponent extends NbpBaseComponent implements OnInit {

  title = 'Examples Tables Page';
  tableNoSortTitle = 'No Sort and Pagination Table';
  emptyTableTitle = 'Empty Data Table';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions

}
