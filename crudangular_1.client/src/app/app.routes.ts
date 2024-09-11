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
import { ReactiveFormsComponent } from './courses/reactive-forms/reactive-forms.component';
import { ApihttpComponent } from './courses/apihttp/apihttp.component';
import { TodoComponent } from './courses/todo/todo.component';
import { AnimationComponent } from './courses/animation/animation.component';

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
  {
    path: 'reactiveForm',
    component: ReactiveFormsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'apiHttp',
    component: ApihttpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'toDO',
    component: TodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'animacje',
    component: AnimationComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }





];
