import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private auth: Auth, private firestore: Firestore) {}

  register(name: string, email: string, password: string) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password).then(async res => {
        const userRef = doc(this.firestore, `users/${res.user.uid}`);
        await setDoc(userRef, { name, email });
        return res.user;
      })
    );
  }

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
}