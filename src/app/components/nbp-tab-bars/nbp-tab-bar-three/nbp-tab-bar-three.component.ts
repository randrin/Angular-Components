import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-tab-bar-three',
  templateUrl: './nbp-tab-bar-three.component.html',
  styleUrls: ['./nbp-tab-bar-three.component.scss']
})
export class NbpTabBarThreeComponent extends NbpBaseComponent implements OnInit {

  @Input() NbpTabbarPosition: string;
  @Input() NbpTabbarInputOne:string;
  @Input() NbpTabbarInputTwo:string;
  @Input() NbpTabbarInputThree:string;
  @Input() NbpTabbarInputFour:string;
  @Input() NbpTabbarInputFive:string;
  @Input() NbpTabbarType:string;
  @Input() nbpTabbarIconNameOne:string;
  @Input() nbpTabbarIconNameTwo:string;
  @Input() nbpTabbarIconNameThree:string;
  @Input() nbpTabbarIconNameFour: string;
  @Input() nbpTabbarIconNameFive: string;

  nbpTabbarTypes:string
  nbpTabbarPositionAndType: string;
  nbpSizeTooltip: string;


  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpTabbarPositionAndType = this.nbpGetnbpTabbarType(this.NbpTabbarType)+ 
    this.nbpSeparator + this.nbpGetnbpTabbarPosition(this.NbpTabbarPosition)
  }
} 