import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Authentication } from '../interfaces/authentication.interface';



@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {


constructor(private store: AngularFirestore) { }

getListOfAuthentication(): Observable<Authentication[]>{
    return this.store.collection<Authentication>('authentication').get().pipe(
        map(snapshot =>
        snapshot.docs.map(doc => ({ ...(doc.data()) as Authentication}))
        )
    )
    }
}
