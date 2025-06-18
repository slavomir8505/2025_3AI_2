import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-settings',
  imports: [CommonModule],
  template: `
    <h2>Nastavenia</h2>
    <button (click)="logout()">Odhlásiť sa</button>
  `
})
export class SettingsComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
