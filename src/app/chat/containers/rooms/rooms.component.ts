import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Messages } from '../../store/index';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RoomsComponent implements OnInit {

  constructor(
    private socket: SocketService
  ) { }

  ngOnInit() {
  }

  sendMessage(message) {
    this.socket.sendMessage(message);
  }

  get messages(): Messages[] {
    return [
      {
        username: 'system',
        message: 'sdu aud asuasud usdha '
      },
      {
        username: 'gaba',
        message: 'x'
      }
    ];
  }
}
