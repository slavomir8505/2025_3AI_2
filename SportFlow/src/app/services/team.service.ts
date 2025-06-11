import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Team } from '../interfaces/team.interface';


@Injectable({
    providedIn: 'root'
  })
  export class TeamService {
    
  
  
    constructor(private store: AngularFirestore) { }
  
    getListOfTeams(): Observable<Team[]>{
      return this.store.collection<Team>('teams')
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => ({
            id: a.payload.doc.id,
            ...(a.payload.doc.data() as Team)
          }))
        )
      );
    }
  
  
    getTeamsById(id: string): Observable<Team[]> {
      return this.store
        .collection<Team>('teams', (ref) => ref.where('leagueId', '==', id))
        .valueChanges()
        .pipe(
          map((teamArray: Team[]) =>
             teamArray
          ),
        );
  }
}