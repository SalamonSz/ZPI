import { Component, Input, signal, WritableSignal } from '@angular/core';
import { CustomToggleComponent } from '../custom-toggle/custom-toggle.component';
import { DiagnosisResultService } from '../../services/diagnosis-result.service';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-diagnosis-result',
  standalone: true,
  imports: [CustomToggleComponent, CommonModule],
  templateUrl: './diagnosis-result.component.html',
  styleUrl: './diagnosis-result.component.scss'
})
export class DiagnosisResultComponent {
  results: { name: string; value: number }[] | null = null;
  keys: string[] = [];

  constructor(public diagnosisSevice: DiagnosisResultService){
  }
  ngOnInit(): void {
    this.diagnosisSevice.result$.subscribe((data) => {
      this.results = data;
    });
  }

  descriptions: { [key: string]: { namePl: string; description: string } } = {
    "basal cell carcinoma": {
      namePl: "Rak podstawnokomórkowy",
      description: "Powszechny rodzaj raka skóry. Zwykle rośnie powoli i rzadko daje przerzuty."
    },
    "nevus": {
      namePl: "Znamię melanocytowe",
      description: "Zazwyczaj łagodny pieprzyk. Ważne jest, aby monitorować zmiany w jego wielkości, kształcie lub kolorze."
    },
    "melanoma": {
      namePl: "Czerniak złośliwy",
      description: "Poważny rodzaj raka skóry, który wymaga wczesnego wykrycia i leczenia."
    }
  };

  getProbabilityText(value: number): string {
    if (value > 0.6) {
      return 'Istnieje wysokie prawdopodobieństwo, że zmiana to';
    } else if (value > 0.3) {
      return 'Jest szansa, że zmiana to';
    } else if (value > 0.1) {
      return 'Istnieje niewielka szansa, że zmiana to';
    } else {
      return 'Nie ma ryzyka, że zmiana to';
    }
  }

  activeTab = 'Wyniki';

  onTabChange(tab: string) {
    this.activeTab = tab;
  }
}


