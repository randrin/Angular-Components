import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-notification-header',
  templateUrl: './nbp-notification-header.component.html',
  styleUrls: ['./nbp-notification-header.component.scss']
})
export class NbpNotificationHeaderComponent extends NbpBaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
