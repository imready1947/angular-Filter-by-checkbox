import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sorting',
  templateUrl: './sorting.component.html'
})
export class SortingComponent  {

  @Output() sort = new EventEmitter();

  change: boolean;

  onSort() {
    this.sort.emit(this.change);
  }

}
