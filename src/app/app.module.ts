import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SortingComponent } from './sorting.component';
import { FilterComponent } from './filter.component';
import { CardsComponent } from './cards.component';

import { FilterService } from './filter.service';
import { SortingService } from './sorting.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SortingComponent, FilterComponent, CardsComponent ],
  providers:    [ FilterService, SortingService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
