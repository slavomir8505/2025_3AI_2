import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { SpravyComponent } from './components/spravy/spravy.component';
import { DnesComponent } from './components/dnes/dnes.component';
import { AccountComponent } from './account/account.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'league/:uid', component: LeaguesComponent },
    { path: 'spravy', component: SpravyComponent },
    { path: 'dnes', component: DnesComponent },
    { path: 'account', component: AccountComponent },
    { path: 'kontakt', component: KontaktComponent },
];
