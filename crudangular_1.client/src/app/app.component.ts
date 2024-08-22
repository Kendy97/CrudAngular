import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    RouterModule,
    CommonModule
  ],
  template: `
    <app-navbar *ngIf="isLoggedIn"></app-navbar>
    <div class="flex" *ngIf="isLoggedIn">
      <app-sidebar></app-sidebar>
      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>
    </div>
    <router-outlet *ngIf="!isLoggedIn"></router-outlet>
  `,
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
