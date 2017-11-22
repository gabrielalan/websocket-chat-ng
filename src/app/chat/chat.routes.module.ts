import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoomsComponent} from './containers/rooms/rooms.component';
import {AuthGuard} from '../core/services/auth.guard';

const chatRoutes: Routes = [
  {
    path: ':id',
    component: RoomsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(chatRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChatRoutesModule {}
