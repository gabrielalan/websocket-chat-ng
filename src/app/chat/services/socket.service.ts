import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Io, Socket, SOCKET_IO, SOCKET_IO_CONFIG, SocketIoConfig } from './socket-io.facade';
import { AppState } from '../store/index';
import { ChangeCurrentUser, Disconnect, NewUser } from '../store/user.actions';

import { NEW_MESSAGE, NEW_USER, ACTIVE_ROOM, USER_LEFT } from 'websocket-chat-server/constants';

@Injectable()
export class SocketService {

  public socket: Socket;

  constructor(
    @Inject(SOCKET_IO)
    private io: Io,

    @Inject(SOCKET_IO_CONFIG)
    private config: SocketIoConfig,

    private store: Store<AppState>
  ) {
    this.socket = io(`ws://${config.hostname}:${config.port}`, {transports: ['websocket']});
    this.subscribe();
  }

  disconnect() {
    this.store.select('user').subscribe(user => {
      console.log(user);
      this.socket.emit(USER_LEFT, { username: user.current });
    });
  }

  newUser(username: string): void {
    this.socket.emit(NEW_USER, username);
    this.store.dispatch(new ChangeCurrentUser(username));
  }

  subscribe(): void {
    this.socket.on(NEW_USER, this.handleNewUser.bind(this));
    this.socket.on(USER_LEFT, this.handleDisconnection.bind(this));
  }

  handleDisconnection(data: any): void {
    this.store.dispatch(new Disconnect(data));
  }

  handleNewUser(data: any): void {
    this.store.dispatch(new NewUser(data));
  }
}
