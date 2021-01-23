import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-feedback-page',
  templateUrl: './nbp-feedback-page.component.html',
  styleUrls: ['./nbp-feedback-page.component.scss']
})
export class NbpFeedbackPageComponent extends NbpBaseComponent implements OnInit {

  title = 'Feedback Page';

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  // Functions

}
