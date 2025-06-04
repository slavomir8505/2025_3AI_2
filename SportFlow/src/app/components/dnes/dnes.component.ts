import { Component } from '@angular/core';
import { SpravyService } from '../../services/spravy.service';
import { NgFor } from '@angular/common';
import { Spravy } from '../../interfaces/spravy.interface';

@Component({
  selector: 'app-dnes',
  imports: [NgFor],
  templateUrl: './dnes.component.html',
  styleUrl: './dnes.component.css'
})

export class DnesComponent {
  spravy!: Spravy[];
  constructor(private service: SpravyService) {
    // Initialization logic can go here
    this.service.getListOfSpravy().subscribe(list=>{
      this.spravy = list
      console.log(this.spravy)
    })
  }

}
