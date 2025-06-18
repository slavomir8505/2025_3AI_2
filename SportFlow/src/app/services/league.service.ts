import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { League } from '../interfaces/league.interface';

import {
  Firestore,
  collection,
  collectionData,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  private firestore: Firestore = inject(Firestore);

  getListOfLeagues(): Observable<League[]> {
    const leaguesCollection = collection(this.firestore, 'leagues');

    return collectionData(leaguesCollection, { idField: 'id' }) as Observable<
      League[]
    >;
  }
}
