import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Spravy } from '../interfaces/spravy.interface';

import {
  Firestore,
  collection,
  collectionData,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class SpravyService {
  private firestore: Firestore = inject(Firestore);

  getListOfSpravy(): Observable<Spravy[]> {
    const spravyCollection = collection(this.firestore, 'spravy');
    return collectionData(spravyCollection) as Observable<Spravy[]>;
  }
}
