import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';


@Component({
  selector: 'nbp-input-textarea-page',
  templateUrl: './nbp-input-textarea-page.component.html',
  styleUrls: ['./nbp-input-textarea-page.component.scss']
})
export class NbpInputTextareaPageComponent extends NbpBaseComponent implements OnInit {

  title1 = 'Input Textarea One Page';
  title2 = 'Input Textarea Two Page';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions

}
