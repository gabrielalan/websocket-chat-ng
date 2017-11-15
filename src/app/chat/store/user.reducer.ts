import {
  NEW_USER,
  DISCONNECT,
  CHANGE_CURRENT_USER,
  All as Action
} from './user.actions';

export interface UserState {
  current: string;
  active: number;
}

export const INITIAL: UserState = {
  current: '',
  active: 0
};

export function user(state = INITIAL, action: Action) {
  switch (action.type) {
    case NEW_USER:
    case DISCONNECT:
      return Object.assign({}, state, {
        active: action.data.active
      });

    case CHANGE_CURRENT_USER:
      return Object.assign({}, state, {
        current: action.username
      });

    default:
      return state;
  }
}
