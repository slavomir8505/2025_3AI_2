import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SpravyComponent } from '../spravy/spravy.component';
import { DnesComponent } from '../dnes/dnes.component';

@Component({
  selector: 'home-app',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css',
  imports: [MatButtonModule, RouterModule, MatDividerModule, MatIconModule, MatSlideToggleModule, MatToolbarModule, MatMenuModule, MatSidenavModule, CommonModule],
})
export class HomeComponent { }
