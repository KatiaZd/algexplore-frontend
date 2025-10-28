import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LieuListComponent } from './components/lieu-list/lieu-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lieux', component: LieuListComponent },
  { path: '**', redirectTo: '' }
];