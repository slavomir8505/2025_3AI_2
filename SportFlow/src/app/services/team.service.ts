import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team.interface';

import {
  Firestore,
  collection,
  collectionData,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class TeamService {

  private firestore: Firestore = inject(Firestore);

  getListOfTeams(): Observable<Team[]> {
    const teamsCollection = collection(this.firestore, 'Teams');
    return collectionData(teamsCollection, { idField: 'id' }) as Observable<
      Team[]
    >;
  }
}
