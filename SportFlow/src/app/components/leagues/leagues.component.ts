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
  

  constructor(private route: ActivatedRoute, private router: Router, private service: TeamService) {
    const nav = this.router.getCurrentNavigation();
    this.leagues = nav?.extras.state?.['leagues'];
    this.service.getListOfTeam().subscribe((list: Team[])=>{
      this.team = list
      console.log(this.team)
    })

    // Ak by neexistoval (napr. reload), vieš si zobrať ID z parametrov:
    if (!this.leagues) {
      const id = this.route.snapshot.paramMap.get('id');

      // Fetchni zo servera podľa ID (fallback)
    }
  }

}
