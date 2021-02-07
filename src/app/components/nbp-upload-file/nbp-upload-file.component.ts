import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-upload-file',
  templateUrl: './nbp-upload-file.component.html',
  styleUrls: ['./nbp-upload-file.component.scss']
})
export class NbpUploadFileComponent extends NbpBaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
