import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true, // odporúčané pre moderné Angular projekty
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // ✅ opravené (bolo styleUrl)
})
export class LoginComponent {

  form: FormGroup;
  errorMessage: string | null = null;

  // ✅ Router musí byť injektovaný cez konštruktor
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.form.valid) {
      console.log('Login form value:', this.form.value);
      this.errorMessage = null;

      this.authService.login(this.form.value.username, this.form.value.password)
        .then(() => {
          console.log('Login successful');
          // ✅ Presmerovanie po úspešnom prihlásení
          this.router.navigateByUrl('/settings');
        })
        .catch((err: any) => {
          console.error('Login error', err);
          this.errorMessage = err?.message || 'Login failed. Please try again.';
        });
    } else {
      console.log('Login form invalid:', this.form.value);
    }
  }

}
