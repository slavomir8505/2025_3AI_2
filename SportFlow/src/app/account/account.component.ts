import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatButton } from '@angular/material/button';


@Component({
  standalone: true,
  selector: 'app-account',
  imports: [CommonModule, FormsModule,],
  template: `
    <h2>Prihlásenie</h2>
    <form (ngSubmit)="login()">
      <input [(ngModel)]="email" name="email" placeholder="Email" required />
      <input [(ngModel)]="password" name="password" placeholder="Heslo" type="password" required />
      <button type="submit">Prihlásiť sa</button>
    </form>
  `
})
export class AccountComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password)
      .then(() => this.router.navigateByUrl('/settings'))
      .catch(err => console.error('Chyba pri prihlasovaní:', err));
  }
}