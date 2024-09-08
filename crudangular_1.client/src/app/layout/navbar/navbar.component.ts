import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl:'./navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  constructor(private sidebarService: SidebarService, private authService: AuthService, private router: Router) { }

  toggleSidebar() {
    console.log('Hamburger button clicked');
    this.sidebarService.toggleSidebar();
  }

  logout(): void {
    this.authService.logout();  
    this.router.navigate(['/login']);  
  }
}
