import { Observable,map } from "rxjs";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from "@angular/core";
import { Spravy } from "../interfaces/spravy.interface";


@Injectable({
    providedIn: 'root'
  })
  export class SpravyService {
  
  
    constructor(private store: AngularFirestore) { }
  
    getListOfSpravy(): Observable<Spravy[]>{
      return this.store.collection<Spravy>('spravy').get().pipe(
        map(snapshot =>
          snapshot.docs.map(doc => ({ ...(doc.data()) as Spravy}))
        )
      )
    }
  }