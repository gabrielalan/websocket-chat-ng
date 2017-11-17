import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Io, Socket, SOCKET_IO, SOCKET_IO_CONFIG, SocketIoConfig } from './socket-io.facade';
import { AppState } from '../store/index';
import { ChangeCurrentUser, Disconnect, NewUser } from '../store/user.actions';
import { NewMessage, ActiveRoom } from '../store/messages.actions';
import { Router } from '@angular/router';
import 'rxjs/add/operator/first';

import { NEW_MESSAGE, NEW_USER, ACTIVE_ROOM, USER_LEFT } from 'websocket-chat-server/constants';

@Injectable()
export class SocketService {

  public socket: Socket;

  constructor(
    @Inject(SOCKET_IO)
    private io: Io,

    @Inject(SOCKET_IO_CONFIG)
    private config: SocketIoConfig,

    private store: Store<AppState>,
    private router: Router
  ) {
    this.socket = io(`ws://${config.hostname}:${config.port}`, {transports: ['websocket']});
    this.subscribe();
  }

  async disconnect() {
    const username = await this.store.select('user', 'current').first().toPromise();
    this.socket.emit(USER_LEFT, { username });
  }

  async sendMessage(message, room) {
    const username = await this.store.select('user', 'current').first().toPromise();

    this.socket.emit(NEW_MESSAGE, { message, room, username });
  }

  newUser(username: string): void {
    this.socket.emit(NEW_USER, username);
    this.store.dispatch(new ChangeCurrentUser(username));
  }

  subscribe(): void {
    this.socket.on(NEW_USER, this.handleNewUser.bind(this));
    this.socket.on(USER_LEFT, this.handleDisconnection.bind(this));
    this.socket.on(NEW_MESSAGE, this.handleNewMessage.bind(this));
    this.socket.on(ACTIVE_ROOM, this.handleActiveRoom.bind(this));
  }

  handleActiveRoom(data) {
    this.store.dispatch(new ActiveRoom(data));
    this.router.navigate(['/room', data.active]);
  }

  handleNewMessage(data): void {
    this.store.dispatch(new NewMessage(data));
  }

  handleDisconnection(data: any): void {
    this.store.dispatch(new Disconnect(data));
  }

  handleNewUser(data: any): void {
    this.store.dispatch(new NewUser(data));
  }
}
