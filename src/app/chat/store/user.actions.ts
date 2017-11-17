import { Action } from '@ngrx/store';

export const NEW_USER = 'NEW_USER';

export const DISCONNECT = 'DISCONNECT';

export const CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER';

/**
 * When a new user start to chat.
 * Event come from server
 */
export class NewUser implements Action {
  readonly type = NEW_USER;

  constructor(public data: { active: number, rooms?: string[] }) {}
}

/**
 * When a user is disconnected or left
 * Event come from server
 */
export class Disconnect implements Action {
  readonly type = DISCONNECT;

  constructor(public data: { active: number }) {}
}

/**
 * When the current user login
 */
export class ChangeCurrentUser implements Action {
  readonly type = CHANGE_CURRENT_USER;

  constructor(public username: string) {}
}

export type All = ChangeCurrentUser | NewUser | Disconnect;
