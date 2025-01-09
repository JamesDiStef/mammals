import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AddMammalComponent } from './add-mammal/add-mammal.component';

export const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    title: 'Search Page',
  },
  {
    path: 'add',
    component: AddMammalComponent,
    title: 'Add Mammal Page',
  },
];
