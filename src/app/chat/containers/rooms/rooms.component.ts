import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState, Messages, MessagesState } from '../../store/index';
import { SocketService } from '../../services/socket.service';
import { Store } from '@ngrx/store';
import { ActiveRoom } from '../../store/messages.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RoomsComponent implements OnInit {
  messages: Messages[] = [];

  active: string = 'General';

  rooms = [ 'General' ];

  constructor(
    private socket: SocketService,
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      const active = params['id'];
      this.active = active;
      this.store.dispatch(new ActiveRoom({ active }));
    });
  }

  ngOnInit() {
    this.store.select('messages').subscribe(this.handleMessagesChange.bind(this));
  }

  handleSelectRoom(active: string): void {
    this.router.navigate(['/room', active]);
  }

  handleMessagesChange(messages: MessagesState) {
    if (!(this.active in messages.rooms)) {
      this.active = 'General';
    }

    this.messages = messages.rooms[this.active].messages;
    this.rooms = Object.keys(messages.rooms);
  }

  sendMessage(message) {
    this.socket.sendMessage(message, this.active);
  }
}
