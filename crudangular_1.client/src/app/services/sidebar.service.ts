import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarOpen = new BehaviorSubject<boolean>(true);
  isSidebarOpen$ = this.sidebarOpen.asObservable();

  toggleSidebar() {
    const currentState = this.sidebarOpen.value;
    console.log('Toggling sidebar. Current state:', currentState);
    this.sidebarOpen.next(!currentState);
    console.log('New state:', !currentState);
  }
}
