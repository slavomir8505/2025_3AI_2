import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from '@angular/fire/auth';
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

    login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
    }

    logout() {
    return signOut(this.auth).then(() => {
        this.router.navigateByUrl('/');
    });
    }

    isLoggedIn(): boolean {
    return this.auth.currentUser !== null;
    }
}