import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormatValuePipe } from '../../pipes/value.pipe';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [MatCardModule,MatIconModule, CommonModule, FormatValuePipe],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss'
})
export class StatsCardComponent {
  @Input() name ='';
  @Input() value: number = 0;
  @Input() change: number = 0;
}
