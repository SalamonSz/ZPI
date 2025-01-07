import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisResultService {

  public resultSubject = new BehaviorSubject<{ name: string; value: number }[] | null>(null);
  public result$ = this.resultSubject.asObservable(); 
  public selectedImage: File | null = null;

  constructor() {}


  public updatePredictions(data: { predictions: { [key: string]: number } }): void {
    if (data && data.predictions) {
      const formattedResult = Object.entries(data.predictions).map(([key, value]) => ({
        name: key,
        value: value,
      }));
      this.resultSubject.next(formattedResult); // Emituj nową wartość jako tablicę obiektów
    } else {
      console.error('Invalid data format');
    }
  }
}
