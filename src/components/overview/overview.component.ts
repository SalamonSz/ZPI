import { Component } from '@angular/core';
import { StatsCardComponent } from '../stats-card/stats-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [StatsCardComponent, CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  informationArray: Information[] = [
    { name: 'Melanocytic nevi', value: 1250, change: 4.8 },
    { name: 'Malignant melanoma', value: 1002, change: 0 },
    { name: 'Seborrheic keratosis', value: 60, change: -1.5 },
  ];

 }

 class Information {
  name: string = '';
  value: number = 0;
  change: number = 0.0;
}


