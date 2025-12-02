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
    this.service.getListOfSpravy().subscribe(list => {
      this.spravy = list.map(spravy => ({
        ...spravy,
        expanded: false
      }));
      console.log(this.spravy);
    });
  }

  toggleExpand(spravy: any): void {
    spravy.expanded = !spravy.expanded;
  }
}