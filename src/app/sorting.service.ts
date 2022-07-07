import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  sortByNameAlphebeticallyAscending(cards) {
    cards.sort((a, b) => a.name.localeCompare(b.name));
    return cards;
  }

}