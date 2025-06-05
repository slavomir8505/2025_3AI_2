import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { League } from '../interfaces/league.interface';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {


  constructor(private store: AngularFirestore) { }

  getListOfLeagues(): Observable<League[]>{
    return this.store.collection<League>('leagues')
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => ({
            id: a.payload.doc.id,
            ...(a.payload.doc.data() as League)
          }))
        )
      );
  }
}
