import { LoginComponent } from '../chat/containers/login/login.component';
import { RoomsComponent } from '../chat/containers/rooms/rooms.component';
import { AuthGuard } from './services/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'room/:id', component: RoomsComponent, canActivate: [AuthGuard] }
];
