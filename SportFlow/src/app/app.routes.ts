import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LaligaComponent } from './laliga/laliga.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path:'laliga-component', component: LaligaComponent},
];
