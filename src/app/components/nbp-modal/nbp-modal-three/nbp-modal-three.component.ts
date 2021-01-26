import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-modal-three',
  templateUrl: './nbp-modal-three.component.html',
  styleUrls: ['./nbp-modal-three.component.scss']
})
export class NbpModalThreeComponent extends NbpBaseComponent implements OnInit {
  @Input() nbpModalTitle: string;
  @Input() nbpModalContent: string; 
  @Input() nbpModalSize: string;
  @Input() nbpModalPosition: string;

  @Output() nbpOnSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() nbpOnClose: EventEmitter<any> = new EventEmitter<any>();

  modalSize: string;
  modalPosition: string
  nbpSizeAndPosition: string;

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void { 
    this.nbpSetUpComponent();
  }
  
  nbpSetUpComponent() {
    this.modalSize = this.nbpGetSizeModalClasse(this.nbpModalSize);
    this.modalPosition = this.nbpGetnbpModalPosition(this.nbpModalPosition);
    this.nbpSizeAndPosition =  this.modalSize + this.nbpSeparator + this.modalPosition
  }

  nbpOnSaved(){

  }

  nbpOnClosed(){

  }
}
