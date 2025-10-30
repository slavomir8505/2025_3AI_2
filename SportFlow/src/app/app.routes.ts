import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { SpravyComponent } from './components/spravy/spravy.component';
import { DnesComponent } from './components/dnes/dnes.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { StatsComponent } from './components/stats/stats.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { guardGuard } from './guard.guard'; // ← tvoj AuthGuard

export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [guardGuard] },
    { path: 'league/:id', component: LeaguesComponent, canActivate: [guardGuard] },
    { path: 'spravy', component: SpravyComponent, canActivate: [guardGuard] },
    { path: 'dnes', component: DnesComponent, canActivate: [guardGuard] },
    { path: 'kontakt', component: KontaktComponent, canActivate: [guardGuard] },
    { path: 'stats', component: StatsComponent, canActivate: [guardGuard] },

    // Login a Register zostávajú otvorené
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // Všetko ostatné presmeruj na login
    { path: '**', redirectTo: 'login' }
];
