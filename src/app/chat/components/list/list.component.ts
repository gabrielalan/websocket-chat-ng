import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent {
  @Input() rooms: string[] = [];

  @Input() active: string;

  @Output() onSelect = new EventEmitter<string>();

  select(room, $event) {
    $event.stopPropagation();
    $event.preventDefault();

    if (room !== this.active) {
      this.onSelect.emit(room);
    }
  }
}
