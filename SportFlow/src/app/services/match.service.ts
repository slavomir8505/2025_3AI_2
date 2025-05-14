import { Observable,map } from "rxjs";
import { Match } from "../interfaces/match.interface";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
  export class MatchService {
  
  
    constructor(private store: AngularFirestore) { }
  
    getListOfMatch(): Observable<Match[]>{
      return this.store.collection<Match>('Match').get().pipe(
        map(snapshot =>
          snapshot.docs.map(doc => ({ ...(doc.data()) as Match}))
        )
      )
    }
  }