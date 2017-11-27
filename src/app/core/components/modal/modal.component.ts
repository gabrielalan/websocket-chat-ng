import {Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() show = false;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    document.body.appendChild(this.elRef.nativeElement);
  }

  ngOnDestroy() {
    document.body.removeChild(this.elRef.nativeElement);
  }
}
