import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NbpSort } from '../utils/nbp-sort';

@Directive({
  selector: '[appNbpSort]'
})
export class NbpSortDirective {

  @Input() appNbpSort: Array<any>;
  constructor(private renderer: Renderer2, private targetElem: ElementRef) { }

  @HostListener("click")
  sortData() {
    console.log('appNbpSort: ', this.appNbpSort)
    debugger
    // Create Object of Sort Class
    const sort = new NbpSort();
    // Get Reference Of Current Clicked Element
    const elem = this.targetElem.nativeElement;
    // Get In WHich Order list should be sorted by default it should be set to desc on element attribute
    const order = elem.getAttribute("data-order");
    // Get The Property Type specially set [data-type=date] if it is date field
    const type = elem.getAttribute("data-type");
    // Get The Property Name from Element Attribute
    const property = 'Firt Name';
    if (order === "desc") {
      this.appNbpSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "asc");
    }
    else {
      this.appNbpSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "desc");
    }
  }
}
