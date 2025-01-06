import { Component, Input, signal, WritableSignal } from '@angular/core';
import { StatsCardComponent } from "../stats-card/stats-card.component";
import { DiagnosisResultComponent } from "../diagnosis-result/diagnosis-result.component";

@Component({
  selector: 'app-diagnosis-section',
  standalone: true,
  imports: [StatsCardComponent, DiagnosisResultComponent],
  templateUrl: './diagnosis-section.component.html',
  styleUrl: './diagnosis-section.component.scss'
})
export class DiagnosisSectionComponent {}
