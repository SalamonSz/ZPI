import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-analysis-card',
  standalone: true,
  imports: [MatCardModule,MatProgressSpinnerModule],
  templateUrl: './analysis-card.component.html',
  styleUrl: './analysis-card.component.scss'
})
export class AnalysisCardComponent {

}
