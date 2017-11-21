import { Action } from '@ngrx/store';

export const NEW_MESSAGE = 'NEW_MESSAGE';

export const ACTIVE_ROOM = 'ACTIVE_ROOM';

export class NewMessage implements Action {
  readonly type = NEW_MESSAGE;

  constructor(public data: { room: string, username: string, message: string }) {}
}

export class ActiveRoom implements Action {
  readonly type = ACTIVE_ROOM;

  constructor(public data: { active: string, rooms?: string[] }) {}
}

export type All = NewMessage | ActiveRoom;
