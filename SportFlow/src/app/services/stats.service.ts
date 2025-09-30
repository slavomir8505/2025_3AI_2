import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Stats } from "../interfaces/stats.interface";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class StatsService {
    constructor(private store: AngularFirestore) { }
    getStatsOfStats(): Observable<Stats[]> {
        return this.store.collection<Stats>('laligatitles').valueChanges();
    }
    


}