import { Component } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { CustomToggleComponent } from '../custom-toggle/custom-toggle.component';
import {MatIconModule} from '@angular/material/icon';
import { ToolbarServiceService } from '../../services/toolbar-service.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatButtonModule, CustomToggleComponent, MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  
  currentTab = 'Wiedza';

  constructor(private tabService: ToolbarServiceService) {
    this.tabService.currentTab$.subscribe((tab) => {
      this.currentTab = tab;
    });
  }

  onTabChange(newTab: string): void {
    this.tabService.setCurrentTab(newTab);
  }
}
