import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-toggle',
  templateUrl: './custom-toggle.component.html',
  styleUrls: ['./custom-toggle.component.scss'],
  standalone: true,
  imports:[CommonModule]
})
export class CustomToggleComponent {
  @Input() options: string[] = []; 
  @Input() selected: string = ''; 
  @Output() selectedChange = new EventEmitter<string>(); 

  selectOption(option: string): void {
    this.selected = option;
    this.selectedChange.emit(option); 
  }
}
