import {Component, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Input() show = false;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    document.body.appendChild(this.elRef.nativeElement);
  }

}
