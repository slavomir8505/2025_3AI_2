import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StatsService } from '../../services/stats.service';
import { Stats } from '../../interfaces/stats.interface';

@Component({
  selector: 'app-graph',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  imports: [NgxChartsModule],
  standalone: true, // pridaj ak používaš standalone komponenty
})
export class StatsComponent {
allStats: Stats[] = [];
constructor(
  private statsService: StatsService
) {}
ngOnInit(): void {
  this.statsService.getStatsOfStats()
  .subscribe(stats =>{
    this.allStats = stats;
  })
}

  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

colorScheme = {
  domain: ['#2e7d32', '#43a047', '#66bb6a', '#a5d6a7'],
};


  

  onSelect(data: { name: string; value: number }): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: { name: string; value: number }): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: { name: string; value: number }): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
