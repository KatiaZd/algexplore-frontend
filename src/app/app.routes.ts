import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LieuListComponent } from './components/lieu-list/lieu-list.component';
import { LieuDetailComponent } from './pages/lieu-detail/lieu-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },

    // page d'admin future, pas exposée dans l'UI
    { path: 'lieux', component: LieuListComponent },

    // page détail publique
    { path: 'lieux/:id', component: LieuDetailComponent },
    
    { path: '**', redirectTo: '' }
];