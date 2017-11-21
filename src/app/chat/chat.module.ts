import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SOCKET_IO_PROVIDER, SOCKET_IO_CONFIG_PROVIDER } from './services/socket-io.facade';
import { StoreModule } from '@ngrx/store';
import { user } from './store/user.reducer';
import { messages } from './store/messages.reducer';

import { SocketService } from './services/socket.service';
import { AuthGuard } from './services/auth.guard';

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
    StoreModule.forRoot({ user, messages })
  ],
  declarations: components,
  exports: components,
  providers: [
    SOCKET_IO_PROVIDER,
    SOCKET_IO_CONFIG_PROVIDER,
    AuthGuard
  ]
})
export class ChatModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChatModule,
      providers: [
        SocketService
      ]
    };
  }
}
