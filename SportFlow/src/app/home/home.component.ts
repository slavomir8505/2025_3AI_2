import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';




@Component({
  selector: 'button-overview-example',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css',
  imports: [MatButtonModule, MatDividerModule, MatIconModule,MatDividerModule],
})
export class HomeComponent {}
