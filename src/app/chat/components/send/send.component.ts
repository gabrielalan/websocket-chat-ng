import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SendComponent implements OnInit {
  public form: FormGroup;

  @Output() onSend = new EventEmitter<string>();

  constructor(
    private builder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.builder.group({
      message: [null, [ Validators.required ]]
    });
  }

  send() {
    const control = this.form.get('message');

    this.onSend.emit(control.value);
    control.setValue(null);
  }
}
