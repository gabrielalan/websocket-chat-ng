import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState, Messages, MessagesState } from '../../store/index';
import { SocketService } from '../../services/socket.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RoomsComponent implements OnInit {
  messages: Messages[] = [];

  constructor(
    private socket: SocketService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('messages').subscribe(this.handleMessagesChange.bind(this));
  }

  handleMessagesChange(messages: MessagesState) {
    this.messages = messages.rooms[messages.active].messages;
  }

  sendMessage(message) {
    this.socket.sendMessage(message);
  }
}
