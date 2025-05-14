import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Team } from '../interfaces/team.interface';


@Injectable({
    providedIn: 'root'
  })
  export class TeamsService {
  
  
    constructor(private store: AngularFirestore) { }
  
    getListOfTeams(): Observable<Team[]>{
      return this.store.collection<Team>('teams').get().pipe(
        map(snapshot =>
          snapshot.docs.map(doc => ({ ...(doc.data()) as Team}))
        )
      )
    }
  }