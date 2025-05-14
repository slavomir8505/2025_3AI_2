import { Component } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { League } from '../../interfaces/league.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dnes',
  imports: [NgFor],
  templateUrl: './dnes.component.html',
  styleUrl: './dnes.component.css'
})

export class DnesComponent {
  leagues!: League[];
  constructor(private service: LeagueService) {
    // Initialization logic can go here
    this.service.getListOfLeagues().subscribe(list=>{
      this.leagues = list
      console.log(this.leagues)
    })
  }

}
