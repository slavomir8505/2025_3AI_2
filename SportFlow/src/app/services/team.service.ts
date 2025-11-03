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
        ),
        map(teams => {
          console.log('Pred zoradenim:', teams.map(t => ({name: t.name, points: t.points})));
          const sorted = [...teams].sort((a, b) => {
            const pointsA = Number(a.points) || 0;
            const pointsB = Number(b.points) || 0;
            return pointsB - pointsA;
          });
          console.log('Po zoriadeni:', sorted.map(t => ({name: t.name, points: t.points})));
          return sorted;
        })
      );
    }
  
  
    getTeamsById(id: string): Observable<Team[]> {
      return this.store
        .collection<Team>('teams', (ref) => 
          ref.where('leagueId', '==', id)
        )
        .valueChanges()
        .pipe(
          map((teamArray: Team[]) => {
            console.log('Pred zoradenim:', teamArray.map(t => ({name: t.name, points: t.points})));
            const sorted = [...teamArray].sort((a, b) => {
              const pointsA = Number(a.points) || 0;
              const pointsB = Number(b.points) || 0;
              return pointsB - pointsA;
            });
            console.log('Po zoriadeni:', sorted.map(t => ({name: t.name, points: t.points})));
            return sorted;
          })
        );
    }
}