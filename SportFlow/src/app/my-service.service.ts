import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { LeagueDescription } from './leaguedescprition';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {


  constructor(private store: AngularFirestore) { }

  getListOfLeagues(): Observable<LeagueDescription[]>{
    return this.store.collection<LeagueDescription>('leagues').get().pipe(
      map(snapshot =>
        snapshot.docs.map(doc => ({ ...(doc.data()) as LeagueDescription}))
      )
    )
  }
}
