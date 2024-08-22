import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../services/sidebar.service';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isOpen!: Observable<boolean>;

  constructor(private sidebarService: SidebarService) {
    this.isOpen = this.sidebarService.isSidebarOpen$;
    this.isOpen.subscribe(value => {
      console.log('Sidebar state changed. Current state:', value);
    });
  }
}



