import { Component } from '@angular/core';
import { StatsCardComponent } from '../stats-card/stats-card.component';
import { CommonModule } from '@angular/common';
import { UploadComponent } from '../upload/upload.component';
import { InstructionComponent } from '../instruction/instruction.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { AnalysisCardComponent } from '../analysis-card/analysis-card.component';
import { MatCardModule } from '@angular/material/card';
import { InformationSectionComponent } from '../information-section/information-section.component';
import { DiagnosisResultComponent } from "../diagnosis-result/diagnosis-result.component";
import { DiagnosisSectionComponent } from "../diagnosis-section/diagnosis-section.component";
import { DjangoApiService } from '../../services/backend-comunication-service/django-api.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [StatsCardComponent, CommonModule, UploadComponent, InstructionComponent, MatCardModule, DiagnosisSectionComponent, CommonModule, InformationSectionComponent],
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

  constructor(private apiService: DjangoApiService){}

  ngOnInit(): void {
    this.apiService.getWeeklyStats().subscribe((result) => {
      const nameMapping: { [key: string]: string } = {
        "nevus": "Znamiona melanocytowe",
        "melanoma": "Czerniak złośliwy",
        "basal cell carcinoma": "Rak podstawnokomórkowy"
      };
  
      result.forEach((item) => {
        const mappedName = nameMapping[item.result];
        if (mappedName) {
          const info = this.informationArray.find((info) => info.name === mappedName);
          if (info) {
            info.value = item.count; 
          }
        }
      });
  
      console.log(this.informationArray);
    });
  }

  informationArray: Information[] = [
    { name: 'Znamiona melanocytowe', value: 1250, change: 4.8 },
    { name: 'Czerniak złośliwy', value: 1002, change: 0 },
    { name: 'Rak podstawnokomórkowy', value: 60, change: -1.5 },
  ];
 }

 class Information {
  name: string = '';
  value: number = 0;
  change: number = 0.0;
}


