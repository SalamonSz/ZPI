import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DjangoApiService {
  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  // Metoda do przewidywań na podstawie obrazu
  predictImage(imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', imageFile);

    return this.http.post(`${this.baseUrl}/api/predict`, formData);
  }

  // Metoda do pobierania tygodniowych statystyk
  getWeeklyStats(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/weeklystats`);
  }

  // Metoda do pobierania miesięcznych statystyk
  getMonthlyStats(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/monthlystats`);
  }

  // Metoda do pobierania listy chorób z opisami
  getDiseases(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/diseases`);
  }

  ngOnInit(): void {
  }
}