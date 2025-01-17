import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { DjangoApiService } from '../services/backend-comunication-service/django-api.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [DjangoApiService],
})
export class AppComponent {
  title = 'ZPI';

  constructor(private apiService: DjangoApiService){
  }
}
