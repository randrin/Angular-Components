import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-color-page',
  templateUrl: './nbp-color-page.component.html',
  styleUrls: ['./nbp-color-page.component.scss']
})
export class NbpColorPageComponent extends NbpBaseComponent implements OnInit {

  title = 'Color Styles';

  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
  }

  // Functions

}
