import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';


@Component({
  selector: 'nbp-modal-two',
  templateUrl: './nbp-modal-two.component.html',
  styleUrls: ['./nbp-modal-two.component.scss']
})
export class NbpModalTwoComponent extends NbpBaseComponent implements OnInit {
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

