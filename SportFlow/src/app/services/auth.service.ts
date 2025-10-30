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

    private userSubject = new BehaviorSubject<User | null>(null);
    user$ = this.userSubject.asObservable();

constructor() {
    onAuthStateChanged(this.auth, user => this.userSubject.next(user));
}

  // Prihlásenie
login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
}

  // Registrácia bez username
register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
}

  // Odhlásenie
logout() {
    return signOut(this.auth).then(() => {
    this.router.navigateByUrl('/login');
    });
}

  // Overenie prihlásenia
isLoggedIn(): boolean {
    return this.auth.currentUser !== null;
}
}
