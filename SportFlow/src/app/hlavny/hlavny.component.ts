import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet, RouterModule, ActivatedRoute } from '@angular/router';
import { DnesComponent } from '../dnes/dnes.component';
import { SpravyComponent } from '../spravy/spravy.component';

@Component({
  selector: 'app-hlavny',
  imports: [CommonModule,RouterOutlet,MatSidenavModule],
  templateUrl: './hlavny.component.html',
  styleUrl: './hlavny.component.css'
})
export class HlavnyComponent {

}
