import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-icon-page',
  templateUrl: './nbp-icon-page.component.html',
  styleUrls: ['./nbp-icon-page.component.scss']
})
export class NbpIconPageComponent extends NbpBaseComponent implements OnInit {

  title = 'Icons Page';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions
  getIconName(icon) {
    return icon.toString();
  }
}
