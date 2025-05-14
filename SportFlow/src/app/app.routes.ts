import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LaligaComponent } from './components/laliga/laliga.component';
import { SpravyComponent } from './components/spravy/spravy.component';
import { DnesComponent } from './components/dnes/dnes.component';
import { AccountComponent } from './account/account.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'laliga', component: LaligaComponent },
    { path: 'spravy', component: SpravyComponent },
    { path: 'dnes', component: DnesComponent },
    { path: 'account', component: AccountComponent },
    { path: 'kontakt', component: KontaktComponent },
];
