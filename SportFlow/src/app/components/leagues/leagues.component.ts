import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterModule, ActivatedRoute } from '@angular/router';
import { League } from '../../interfaces/league.interface';
import { Team } from '../../interfaces/team.interface';
import { TeamService } from '../../services/team.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-leagues',
  imports: [CommonModule],
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.css'
})
export class LeaguesComponent implements OnInit {
  teams!: Team[];
  leagues!: League;

  destroyRef = inject(DestroyRef)
  

  constructor(private route: ActivatedRoute, private router: Router, private service: TeamService,private cd: ChangeDetectorRef) {
    
    
    
    if (!this.leagues) {
      

      
    }
  }

  ngOnInit(): void {
    const nav = this.router.getCurrentNavigation();
    
    const id = this.route.snapshot.paramMap.get('id')
   
    console.log(id);
    console.log(this.leagues);
      this.route.paramMap.pipe(
      switchMap((params) => {
        return this.service.getListOfTeams().pipe(
          map((teams: Team[]) => teams.filter(team => team.leagueId === params.get('id')))
        );
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((list: Team[])=>{
      console.log(list)
      this.teams = list;
    })
    

    
  
}

}
