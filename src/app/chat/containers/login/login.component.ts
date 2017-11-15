import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocketService } from '../../services/socket.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState, UserState } from '../../store/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  public userState: Observable<UserState>;

  constructor(
    private builder: FormBuilder,
    private socket: SocketService,
    private store: Store<AppState>
  ) {
    this.userState = store.select('user');
  }

  ngOnInit() {
    this.form = this.builder.group({
      username: [null, [ Validators.required, Validators.minLength(3) ]]
    });
  }

  enter() {
    this.socket.newUser(this.form.get('username').value);
  }
}
