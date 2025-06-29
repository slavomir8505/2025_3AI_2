import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LeagueService } from './services/league.service';
import { League } from './interfaces/league.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule, 
    MatSlideToggleModule, 
    MatToolbarModule, 
    MatMenuModule, 
    MatSidenavModule, 
    RouterLink,
    RouterLinkActive,
    NgFor,
    RouterOutlet],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css'
})
export class AppComponent {
  title = 'SportFlow';
  leagues!: League[];
  constructor(private service: LeagueService) {
    // Initialization logic can go here
    this.service.getListOfLeagues().subscribe(list=>{
      this.leagues = list
      console.log(this.leagues)
    })
  }
}


