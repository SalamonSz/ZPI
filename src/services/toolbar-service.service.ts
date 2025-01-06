import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarServiceService {

  private currentTabSubject = new BehaviorSubject<string>('Wiedza');
  currentTab$ = this.currentTabSubject.asObservable();

  setCurrentTab(tab: string): void {
    this.currentTabSubject.next(tab);
  }

  getCurrentTab(): string {
    return this.currentTabSubject.value;
  }
}
