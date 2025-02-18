import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterOutlet, RouterModule, ActivatedRoute } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';





@Component({
  selector: 'app-root',
  imports: [MatButtonModule,MatDividerModule,MatIconModule,MatSlideToggleModule,RouterOutlet,MatToolbarModule,MatMenuModule,MatSidenavModule],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css',
  

})
export class AppComponent {
  title = 'SportFlow';
}
