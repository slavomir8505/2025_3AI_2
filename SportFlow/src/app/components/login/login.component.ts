import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
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
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
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
          // successful login — navigation or further logic can be added in the service
        })
        .catch((err: any) => {
          // Capture and display a friendly message
          console.error('Login error', err);
          // err may be a FirebaseError with code/message
          this.errorMessage = err?.message || 'Login failed. Please try again.';
        });
    } else {
      console.log('Login form invalid:', this.form.value);
    }
  }

}
