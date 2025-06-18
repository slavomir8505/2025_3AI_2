import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../interfaces/match.interface';

import {
  Firestore,
  collection,
  collectionData,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private firestore: Firestore = inject(Firestore);

  getListOfMatch(): Observable<Match[]> {
    const matchCollection = collection(this.firestore, 'Match');
    return collectionData(matchCollection) as Observable<Match[]>;
  }
}
