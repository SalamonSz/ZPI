import { Component } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { CustomToggleComponent } from '../custom-toggle/custom-toggle.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatButtonModule, CustomToggleComponent, MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  currentTab = 'overview';

  onTabChange(value: string) {
    this.currentTab = value;
    console.log('Selected tab:', value);
  }
}
