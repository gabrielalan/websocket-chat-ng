import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocketService } from '../../../core/services/socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private socket: SocketService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.builder.group({
      username: [null, [ Validators.required, Validators.minLength(3) ]]
    });
  }

  enter() {
    this.socket.newUser(this.form.get('username').value);
    this.router.navigate(['/room/General']);
  }
}
