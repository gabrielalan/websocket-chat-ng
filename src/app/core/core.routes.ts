import { LoginComponent } from '../login/containers/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'room',
    loadChildren: 'app/chat/chat.module#ChatModule',
    canLoad: [AuthGuard]
  }
];
