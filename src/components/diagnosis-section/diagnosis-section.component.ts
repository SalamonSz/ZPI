import { Component, Input, signal, WritableSignal } from '@angular/core';
import { StatsCardComponent } from "../stats-card/stats-card.component";
import { DiagnosisResultComponent } from "../diagnosis-result/diagnosis-result.component";
import { DiagnosisResultService } from '../../services/diagnosis-result.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diagnosis-section',
  standalone: true,
  imports: [StatsCardComponent, DiagnosisResultComponent, CommonModule],
  templateUrl: './diagnosis-section.component.html',
  styleUrl: './diagnosis-section.component.scss'
})
export class DiagnosisSectionComponent {

  results: { name: string; value: number }[] | null = null;

  constructor(public diagnosisSevice: DiagnosisResultService){}

  ngOnInit(): void {
    this.diagnosisSevice.result$.subscribe((data) => {
      this.results = data;
    });
  }

  descriptions: { 
    [key: string]: { 
      namePl: string; 
    } 
  } = {
    "basal cell carcinoma": {
      namePl: "Rak podstawnokomórkowy",
    },
    "nevus": {
      namePl: "Znamię melanocytowe",
    },
    "melanoma": {
      namePl: "Czerniak złośliwy",
    }
  };
  
}
