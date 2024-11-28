import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

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

  instructionSignal = signal(false); 

  onInstructionClick() {
    this.instructionSignal.set(true);
  }
  imageSrc: string | null = null;

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageSrc = e.target.result; 
      };

      reader.readAsDataURL(file);
    }
  }
}
