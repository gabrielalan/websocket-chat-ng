import { UserState } from './user.reducer';

export { UserState } from './user.reducer';

export interface Messages {
  username: string;
  message: string;
}

export interface Rooms {
  messages: Messages[];
}

/**
 * Definition for the messages reducer
 */
export interface MessagesState {
  active: string;
  rooms: { [key: string]: Rooms };
}

/**
 * AppState model
 * Holds the structure for all the store
 */
export interface AppState {
  user: UserState;
}
