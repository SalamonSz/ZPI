import { Component, EventEmitter, Output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [ MatButtonModule,
    MatCardModule,
    MatIconModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {

  instructionSignal = signal(false); 

  onInstructionClick() {
    this.instructionSignal.set(true);
  }

}
