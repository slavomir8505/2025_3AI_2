import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
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

  popularLeagues = [
    { name: 'La Liga', country: 'Španielsko', teams: 20, id: 140 },
    { name: 'Premier League', country: 'Anglicko', teams: 20, id: 39 },
    { name: 'Bundesliga', country: 'Nemecko', teams: 18, id: 78 },
    { name: 'Serie A', country: 'Taliansko', teams: 20, id: 135 }
  ];
}