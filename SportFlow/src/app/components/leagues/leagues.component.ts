import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule, ActivatedRoute } from '@angular/router';
import { League } from '../../interfaces/league.interface';
import { Team } from '../../interfaces/team.interface';
import { TeamService } from '../../services/team.service';
@Component({
  selector: 'app-leagues',
  imports: [CommonModule],
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.css'
})
export class LeaguesComponent {
  team!: Team[];
  leagues!: League[];
league: any;
  

  

}
