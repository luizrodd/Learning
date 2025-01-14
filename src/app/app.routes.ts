import { Routes } from '@angular/router';
import { DateComponent } from './date/date.component';
import { DisabilityComponent } from './disability/disability.component';
import { ImagesComponent } from './images/images.component';
import { TableIndexComponent } from './table-index/table-index.component';

export const routes: Routes = [
  {
    path: 'date',
    component: DateComponent,
  },
  {
    path: 'disability',
    component: DisabilityComponent,
  },
  {
    path: 'images',
    component: ImagesComponent,
  },
  {
    path: 'table-index',
    component: TableIndexComponent
  }
];
