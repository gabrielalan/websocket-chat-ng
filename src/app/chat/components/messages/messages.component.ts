import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Messages } from '../../store/index';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent {
  @Input() messages: Messages[];
}
