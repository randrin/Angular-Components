import { R3TargetBinder } from '@angular/compiler';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-tab-bar',
  templateUrl: './nbp-tab-bar.component.html',
  styleUrls: ['./nbp-tab-bar.component.scss']
})
export class NbpTabbarComponent extends NbpBaseComponent implements OnInit {
  @Input() NbpTabbarPosition: string = 'nav';
  @Input() NbpTabbarInputOne:Array<String>;
  @Input() NbpTabbarType:string;

  nbpTabbarPositionAndType:string
  status: boolean;

  constructor(injector:Injector) {
    super(injector); 
  }

  ngOnInit(): void {
    this.nbpTabbarPositionAndType = this.nbpGetnbpTabbarType(this.NbpTabbarType)+ 
    this.nbpSeparator + this.nbpGetnbpTabbarPosition(this.NbpTabbarPosition)
  }
}
