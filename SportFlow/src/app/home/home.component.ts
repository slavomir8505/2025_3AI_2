import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DnesComponent } from '../dnes/dnes.component';
import { SpravyComponent } from '../spravy/spravy.component';




@Component({
  selector: 'button-overview-example',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css',
  imports: [CommonModule, SpravyComponent,DnesComponent],
})
export class HomeComponent {}
