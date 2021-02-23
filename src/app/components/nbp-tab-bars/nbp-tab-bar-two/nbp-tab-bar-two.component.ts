import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';


@Component({
  selector: 'nbp-tab-bar-two',
  templateUrl: './nbp-tab-bar-two.component.html',
  styleUrls: ['./nbp-tab-bar-two.component.scss']
})
export class NbpTabBarTwoComponent extends NbpBaseComponent implements OnInit {

  @Input() NbpTabbarPosition: string;
  @Input() NbpTabbarInputTwo:string;
  @Input() NbpTabbarType:string;

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