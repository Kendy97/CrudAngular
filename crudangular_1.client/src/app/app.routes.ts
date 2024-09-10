import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { ClientComponent } from './pages/client/client.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FirstComponent } from './courses/1/1.component';
import { ClockComponent } from './courses/clock/clock.component';
import { Fun3Component } from './courses/fun3/fun3.component';
import { ElementRefComponent } from './courses/element-ref/element-ref.component';
import { TemplateRefComponent } from './courses/template-ref/template-ref.component';
import { HostListener } from '@angular/core';
import { HostListenerComponent } from './courses/host-listener/host-listener.component';
import { DirectiveComponent } from './courses/directive/directive.component';
import { ChangeDetectionComponent } from './courses/change-detection/change-detection.component';
import { NgclassComponent } from './courses/ngclass/ngclass.component';

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
  {
    path: 'fun3',
    component: Fun3Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'elementRef',
    component: ElementRefComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'renderer2',
    component: ElementRefComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'templateRef',
    component: TemplateRefComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'hostListener',
    component: HostListenerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'directive',
    component: DirectiveComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'changeDetection',
    component: ChangeDetectionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ngclass',
    component: NgclassComponent,
    canActivate: [AuthGuard]
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }





];
