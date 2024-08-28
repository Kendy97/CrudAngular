import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from '../app/layout/navbar/navbar.component';
import { SidebarComponent } from '../app/layout/sidebar/sidebar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    RouterModule,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  isLoggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }
}
