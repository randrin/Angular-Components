import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-tab-bar-five',
  templateUrl: './nbp-tab-bar-five.component.html',
  styleUrls: ['./nbp-tab-bar-five.component.scss']
})
export class NbpTabBarFiveComponent extends NbpBaseComponent implements OnInit {

  @Input() NbpTabbarType:string;
  @Input() NbpTabbarInputOne:string;
  @Input() NbpTabbarInputTwo:string;
  @Input() NbpTabbarInputThree:string;
  @Input() NbpTabbarInputFour:string;
  @Input() NbpTabbarInputFive:string;
  @Input() nbpTabbarContentOne:string;
  @Input() nbpTabbarContentTwo:string;
  @Input() nbpTabbarContentThree:string;
  @Input() nbpTabbarContentFour: string;
  @Input() nbpTabbarContentFive: string;

  nbpTabbarType:string
  nbpSizeTooltip: string;


  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpTabbarType = this.nbpGetnbpTabbarType(this.NbpTabbarType) + 
    this.nbpSeparator + this.nbpTaglia
  }
} 

