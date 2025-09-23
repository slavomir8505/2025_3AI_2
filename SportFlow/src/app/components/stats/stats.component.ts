import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  imports: [NgxChartsModule],
  standalone: true, // pridaj ak používaš standalone komponenty
})
export class StatsComponent {
  single: any[] = [
    { name: 'Germany', value: 8940000 },
    { name: 'USA', value: 5000000 },
    { name: 'France', value: 7200000 },
    { name: 'UK', value: 6200000 },
  ];

  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#1fb112ff', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() {}

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
