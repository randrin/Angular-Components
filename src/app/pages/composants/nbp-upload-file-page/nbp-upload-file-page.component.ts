import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-upload-file-page',
  templateUrl: './nbp-upload-file-page.component.html',
  styleUrls: ['./nbp-upload-file-page.component.scss']
})

export class NbpUploadFilePageComponent extends NbpBaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
