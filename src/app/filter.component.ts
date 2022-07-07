import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent {

  @Output() filter = new EventEmitter();

  options = [
    {name:'Male', value:'Male', checked:true},
    {name:'Female', value:'Female', checked:false},
    {name:'Children', value:'Children', checked:true},
    {name:'Footwear', value:'Footwear', checked:true}
  ]

  onChange() {
    this.filter.emit(this.options);
  }
}
