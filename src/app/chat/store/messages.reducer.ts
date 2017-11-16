import { MessagesState } from './index';
import {
  NEW_MESSAGE,
  ACTIVE_ROOM,
  All as Action
} from './messages.actions';

export const INITIAL: MessagesState = {
  active: 'General',
  rooms: {
    'General': { messages: [] },
    'Room #1': { messages: [] }
  }
}

export function messages(state = INITIAL, action: Action): MessagesState {
  switch (action.type) {
    case NEW_MESSAGE:
      const room = state.rooms[action.data.room];

      return Object.assign({}, state, {
        rooms: {
          [action.data.room]: {
            messages: [
              ...room.messages,
              {
                username: action.data.username,
                message: action.data.message
              }
            ]
          }
        }
      });

    default:
      return state;
  }
}
