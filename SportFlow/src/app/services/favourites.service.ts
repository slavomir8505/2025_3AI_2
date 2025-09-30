import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc, deleteDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  constructor(private firestore: Firestore) {}

  // pridanie do obľúbených
  addFavorite(userId: string, itemId: string, data: any) {
    const favDoc = doc(this.firestore, `users/${userId}/favorites/${itemId}`);
    return setDoc(favDoc, { ...data, createdAt: new Date() });
  }

  // zmazanie z obľúbených
  removeFavorite(userId: string, itemId: string) {
    const favDoc = doc(this.firestore, `users/${userId}/favorites/${itemId}`);
    return deleteDoc(favDoc);
  }

  // sledovanie obľúbených (realtime)
  getFavorites(userId: string): Observable<any[]> {
    const favsCollection = collection(this.firestore, `users/${userId}/favorites`);
    return collectionData(favsCollection, { idField: 'id' });
  }
}
