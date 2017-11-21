import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MessagesComponent } from './components/messages/messages.component';
import { ListComponent } from './components/list/list.component';
import { SendComponent } from './components/send/send.component';
import { LoginComponent } from './containers/login/login.component';
import { RoomsComponent } from './containers/rooms/rooms.component';

const components = [
  MessagesComponent,
  ListComponent,
  SendComponent,
  LoginComponent,
  RoomsComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: components,
  exports: components,
  providers: []
})
export class ChatModule {}
