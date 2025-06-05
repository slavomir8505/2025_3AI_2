import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Team } from '../interfaces/team.interface';


@Injectable({
    providedIn: 'root'
  })
  export class TeamService {
    getListOfTeam() {
      throw new Error('Method not implemented.');
    }
  
  
    constructor(private store: AngularFirestore) { }
  
    getListOfTeams(): Observable<Team[]>{
      return this.store.collection<Team>('Teams')
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
  }