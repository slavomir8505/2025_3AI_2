import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LaligaComponent } from './laliga/laliga.component';
import { SpravyComponent } from './spravy/spravy.component';
import { DnesComponent } from './dnes/dnes.component';
import { AccountComponent } from './account/account.component';



export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path:'laliga-component', component: LaligaComponent},
    {path:'spravy-component', component: SpravyComponent },
    {path:'dnes-component', component: DnesComponent },
     {path:'account-component', component: AccountComponent },
     
      ]