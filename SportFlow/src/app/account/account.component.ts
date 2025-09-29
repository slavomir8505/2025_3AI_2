import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({

  selector: 'app-account',
  imports: [RouterModule,MatButtonModule, MatToolbarModule,MatIconModule,],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'

})
export class AccountComponent {

}