import {Component, HostListener} from '@angular/core';
import {SocketService} from './chat/services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private socket: SocketService,
  ) {}

  @HostListener('window:beforeunload')
  beforeUnload() {
    this.socket.disconnect();
  }
}
