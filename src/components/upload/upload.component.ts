import { ToolbarServiceService } from './../../services/toolbar-service.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DjangoApiService } from '../../services/backend-comunication-service/django-api.service';
import { DiagnosisResultService } from '../../services/diagnosis-result.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [ MatButtonModule,
    MatCardModule,
    MatIconModule, CommonModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class UploadComponent {

  selectedImage: File | null = null;

  constructor(private ToolbarService: ToolbarServiceService, private apiService: DjangoApiService, private daignosisService: DiagnosisResultService){

  }

  instructionSignal = signal(false); 
  startAnalysisSignal = signal(false);
  imageSet = false;

  onInstructionClick() {
    this.instructionSignal.set(true);
  }

  onAcceptClick(){
    if (!this.selectedImage) {
      console.error('No image selected!');
      return;
    }
    
    this.instructionSignal.set(false);
    this.startAnalysisSignal = signal(true);
    this.imageSet = true;
    this.apiService.predictImage(this.selectedImage).subscribe({
      next: (response) => {
        console.log('Prediction result:', response);
        this.daignosisService.updatePredictions(response);
        this.ToolbarService.setCurrentTab('Diagnoza');
      },
      error: (error) => {
        console.error('Error during prediction:', error);
      },
    });
    this.ToolbarService.setCurrentTab('Badanie');
  }
  imageSrc: string | null = null;

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.selectedImage = file;
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageSrc = e.target.result; 
      };

      reader.readAsDataURL(file);
    }
  }
}
