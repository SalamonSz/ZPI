import { Component } from '@angular/core';
import { StatsCardComponent } from '../stats-card/stats-card.component';
import { CommonModule } from '@angular/common';
import { UploadComponent } from '../upload/upload.component';
import { InstructionComponent } from '../instruction/instruction.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { AnalysisCardComponent } from '../analysis-card/analysis-card.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [StatsCardComponent, CommonModule, UploadComponent, InstructionComponent, AnalysisCardComponent, MatCardModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }), 
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })), 
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' })), 
      ]),
    ]),
  ],
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


