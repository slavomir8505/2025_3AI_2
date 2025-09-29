import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Authentication } from '../interfaces/authentication.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private firestore: Firestore) {}

  getListOfAuthentication(): Observable<Authentication[]> {
    const authRef = collection(this.firestore, 'authentication');
    return collectionData(authRef, { idField: 'id' }) as Observable<Authentication[]>;
  }
}
