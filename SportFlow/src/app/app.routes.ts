import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { SpravyComponent } from './components/spravy/spravy.component';
import { DnesComponent } from './components/dnes/dnes.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { StatsComponent } from './components/stats/stats.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'league/:id', component: LeaguesComponent },
    { path: 'spravy', component: SpravyComponent },
    { path: 'dnes', component: DnesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'kontakt', component: KontaktComponent },
    { path: 'stats', component: StatsComponent },

];
