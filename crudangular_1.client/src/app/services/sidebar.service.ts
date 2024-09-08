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
    this.sidebarOpen.next(!currentState);
  }
}
