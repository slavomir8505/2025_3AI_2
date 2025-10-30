import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);

  // Observable pre aktuálneho používateľa
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    // Sleduje stav prihlásenia používateľa a aktualizuje user$
    onAuthStateChanged(this.auth, user => this.userSubject.next(user));
  }

  // Prihlásenie
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Registrácia (len email + password)
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Odhlásenie
  logout() {
    return signOut(this.auth).then(() => {
      this.router.navigateByUrl('/login'); // presmerovanie po logout
    });
  }

  // Overenie prihlásenia (synchronné)
  isLoggedIn(): boolean {
    return this.auth.currentUser !== null;
  }
}
