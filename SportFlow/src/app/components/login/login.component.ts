import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService, // public aby sme mohli použiť user$ v HTML
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.form.valid) {
      const { username, password } = this.form.value;
      this.errorMessage = null;

      this.authService.login(username, password)
        .then(() => {
          console.log('Login successful');
          this.router.navigateByUrl('/settings'); // alebo hociktorá chránená stránka
        })
        .catch((err: any) => {
          console.error('Login error', err);
          this.errorMessage = err?.message || 'Login failed. Please try again.';
        });
    } else {
      console.log('Login form invalid:', this.form.value);
    }
  }

  logout() {
    this.authService.logout();
  }
}
