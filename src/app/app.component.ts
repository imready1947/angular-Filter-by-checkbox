import { Component } from '@angular/core';
import { SortingService } from './sorting.service.ts';
import { FilterService } from './filter.service.ts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(
    private sortingService: SortingService,
    private filterService: FilterService) {}
  
    cards = [
    {
      name: "Daniel",
      profile: [
        {
          type: "Gender",
          name: "Male"
        },
        {
          type: "Fashion",
          name: "Footwear"
        }
      ]
    },
    {
      name: "Nazar",
      profile: [
        {
          type: "Gender",
          name: "Male"
        },
        {
          type: "Family",
          name: "Children"
        }
      ]
    },
    {
      name: "Shilpy",
      profile: [
        {
          type: "Gender",
          name: "Female"
        }
      ]
    },
    {
      name: "Janice",
      profile: [
        {
          type: "Gender",
          name: "Female"
        },
        {
          type: "Family",
          name: "Children"
        }
      ]
    }
  ]

  onSort() {
    this.sortingService.sortByNameAlphebeticallyAscending(this.cards);
  }

  // onFilter() {
  //   this.filterService.filterByCheckboxes(this.cards);
  // }

  onFilter(options) {
    console.log(options);
    this.cards.filter(x => x.profile == options.value );
  }

}
