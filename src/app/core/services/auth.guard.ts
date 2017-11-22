import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../store';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.isLoggedIn();
  }

  canLoad(route: Route): Observable<boolean> {
    return this.isLoggedIn().first();
  }

  isLoggedIn(): Observable<boolean> {
    return this.store
      .select('user', 'current')
      .map(current => current !== '')
      .map(isLogged => isLogged || (this.router.navigate(['/login']) && false));
  }
}
