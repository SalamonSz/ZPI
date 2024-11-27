import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OverviewComponent } from '../components/overview/overview.component';

export const routes: Routes = [
    { path: '', component: OverviewComponent }, /*
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' } // Przekierowanie dla nieistniejących tras*/
  ];
