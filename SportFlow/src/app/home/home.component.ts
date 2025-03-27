import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterOutlet, RouterModule, ActivatedRoute } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../app.component';




@Component({
  selector: 'button-overview-example',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css',
  imports: [MatButtonModule,MatDividerModule,MatIconModule,MatSlideToggleModule,RouterOutlet,MatToolbarModule,MatMenuModule,MatSidenavModule,AppComponent,CommonModule,RouterLink],
})
export class HomeComponent {}
