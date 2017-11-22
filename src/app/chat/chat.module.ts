import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MessagesComponent } from './components/messages/messages.component';
import { ListComponent } from './components/list/list.component';
import { SendComponent } from './components/send/send.component';

import { RoomsComponent } from './containers/rooms/rooms.component';
import { ChatRoutesModule } from './chat.routes.module';

const components = [
  MessagesComponent,
  ListComponent,
  SendComponent,
  RoomsComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChatRoutesModule
  ],
  declarations: components,
  exports: components,
  providers: []
})
export class ChatModule {}
