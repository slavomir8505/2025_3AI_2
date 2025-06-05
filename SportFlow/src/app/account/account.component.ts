import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  registerName = '';
  registerEmail = '';
  registerPassword = '';

  loginEmail = '';
  loginPassword = '';

  constructor(private authService: AuthenticationService) {}

  onRegister(event: Event) {
    event.preventDefault();
    this.authService.register(this.registerName, this.registerEmail, this.registerPassword)
      .subscribe({
        next: user => alert('Registrácia úspešná!'),
        error: err => alert('Chyba pri registrácii: ' + err.message)
      });
  }

  onLogin(event: Event) {
    event.preventDefault();
    this.authService.login(this.loginEmail, this.loginPassword)
      .subscribe({
        next: user => alert('Prihlásenie úspešné!'),
        error: err => alert('Chyba pri prihlásení: ' + err.message)
      });
  }
}
