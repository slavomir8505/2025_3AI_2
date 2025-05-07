import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { LeagueDescription } from '../leaguedescprition';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dnes',
  imports: [NgFor],
  templateUrl: './dnes.component.html',
  styleUrl: './dnes.component.css'
})

export class DnesComponent {
  leagues!: LeagueDescription[];
  constructor(private service: MyServiceService) {
    // Initialization logic can go here
    this.service.getListOfLeagues().subscribe(list=>{
      this.leagues = list
      console.log(this.leagues)
    })
  }

}
