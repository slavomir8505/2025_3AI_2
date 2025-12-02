import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  leagues: any[] = [];

  features = [
    {
      icon: '⚽',
      title: 'Živé Výsledky',
      description: 'Sledujte živé výsledky futbalových zápasov z celého sveta v reálnom čase'
    },
    {
      icon: '📊',
      title: 'Štatistiky',
      description: 'Detailné štatistiky hráčov, tímov a líg s prehľadnými grafmi'
    },
    {
      icon: '🏆',
      title: 'Tabuľky Líg',
      description: 'Aktuálne tabuľky najpopulárnejších futbalových líg vrátane La Ligy'
    },
    {
      icon: '📰',
      title: 'Športové Správy',
      description: 'Najnovšie aktuality a informácie zo sveta futbalu'
    }
  ];

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.loadLeaguesFromFirebase();
  }

  loadLeaguesFromFirebase(): void {
    this.firestore.collection('leagues')
      .snapshotChanges()
      .subscribe(
        (data: any[]) => {
          this.leagues = data
            .map(doc => ({
              id: doc.payload.doc.id,
              ...doc.payload.doc.data()
            }))
            .sort((a, b) => a.id - b.id);
          console.log('Ligy načítané:', this.leagues);
        },
        (error) => {
          console.error('Chyba pri načítavaní líg:', error);
          // Fallback na testovací dáta
          this.leagues = [
            { name: 'La Liga', id: 140, imageUrl: 'assets/laliga.png' },
            { name: 'Premier League', id: 39, imageUrl: 'assets/premier.png' },
            { name: 'Bundesliga', id: 78, imageUrl: 'assets/bundesliga.png' },
            { name: 'Serie A', id: 135, imageUrl: 'assets/seria.png' }
          ];
        }
      );
  }
}