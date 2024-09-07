import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { ClientComponent } from './pages/client/client.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FirstComponent } from './courses/1/1.component';
import { ClockComponent } from './courses/clock/clock.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'client',
    component: ClientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'firstlesson',
    component: FirstComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clock',
    component: ClockComponent,
    canActivate: [AuthGuard]
  },


  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }





];
