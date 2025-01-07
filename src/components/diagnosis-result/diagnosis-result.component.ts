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

  descriptions: { 
    [key: string]: { 
      namePl: string; 
      description: string; 
      symptoms: string; 
      riskFactors: string; 
      recommendations: string; 
      treatment: string; 
    } 
  } = {
    "basal cell carcinoma": {
      namePl: "Rak podstawnokomórkowy",
      description: "Powszechny rodzaj raka skóry. Wywodzi się z komórek podstawnych, które znajdują się w najbardziej zewnętrznej warstwie skóry (naskórku).",
      symptoms: "Perłowy lub przezroczysty guzek, zmiana z podwiniętymi brzegami i centralnym zagłębieniem, bliznowata zmiana bez wcześniejszego urazu.",
      riskFactors: "Ekspozycja na promieniowanie UV, jasna karnacja, wiek powyżej 50 lat.",
      recommendations: "Unikaj ekspozycji na słońce, stosuj kremy z filtrem UV, regularne kontrole dermatologiczne.",
      treatment: "Usunięcie chirurgiczne zmiany, radioterapia w przypadku zaawansowanych zmian."
    },
    "nevus": {
      namePl: "Znamię melanocytowe",
      description: "Łagodny pieprzyk. Ważne jest monitorowanie zmian w jego wielkości, kształcie lub kolorze.",
      symptoms: "Ciemna plama lub pieprzyk o regularnych brzegach.",
      riskFactors: "Wrodzone predyspozycje, nadmierna ekspozycja na promieniowanie UV.",
      recommendations: "Monitoruj zmiany znamion, szczególnie nowe lub szybko rosnące zmiany.",
      treatment: "Regularne obserwacje; w razie podejrzeń usunięcie chirurgiczne."
    },
    "melanoma": {
      namePl: "Czerniak złośliwy",
      description: "Poważny rodzaj raka skóry, który wymaga wczesnego wykrycia i leczenia. Może rozwijać się na istniejących znamionach lub zdrowej skórze.",
      symptoms: "Asymetryczne zmiany skórne, nieregularne brzegi, zmiany koloru, średnica powyżej 6 mm.",
      riskFactors: "Jasna karnacja, wrodzone predyspozycje, intensywna ekspozycja na promieniowanie UV.",
      recommendations: "Regularne badania dermatologiczne, stosowanie kremów z filtrem UV, unikanie opalania.",
      treatment: "Chirurgiczne usunięcie zmiany, immunoterapia lub radioterapia w przypadku zaawansowanych stadiów."
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

  getHighestProbabilityResult(results: any[]): any | null {
    const filteredResults = results.filter(result => result.value >= 50);
    if (filteredResults.length === 0) {
      return null;
    }
    return filteredResults.reduce((max, current) =>
      current.value > max.value ? current : max
    );
  }
}


