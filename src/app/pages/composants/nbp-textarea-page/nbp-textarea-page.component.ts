import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-textarea-page',
  templateUrl: './nbp-textarea-page.component.html',
  styleUrls: ['./nbp-textarea-page.component.scss']
})
export class NbpTextareaPageComponent extends NbpBaseComponent implements OnInit {

  title1 = 'Textarea One Page';
  title2 = 'Textarea Two Page';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions

}
