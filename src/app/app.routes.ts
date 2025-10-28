import { Routes } from '@angular/router';
import { LieuListComponent } from './components/lieu-list/lieu-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'lieux',
    pathMatch: 'full'
  },
  {
    path: 'lieux',
    component: LieuListComponent
  }
];