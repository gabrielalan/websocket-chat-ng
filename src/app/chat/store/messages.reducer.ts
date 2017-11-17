import { MessagesState } from './index';
import { NEW_USER, NewUser } from './user.actions';
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
};

export function mergeRooms(state, rooms) {
  const newRooms = rooms.reduce((result, item) => {
    if (item in state.rooms) {
      return result;
    }

    result[item] = {
      messages: []
    };

    return result;
  }, {});

  return Object.assign({}, state, {
    rooms: Object.assign({}, state.rooms, newRooms)
  });
}

export function messages(state = INITIAL, action: Action | NewUser): MessagesState {
  switch (action.type) {
    case NEW_USER:
      return mergeRooms(state, action.data.rooms);

    case ACTIVE_ROOM:
      const mergedState = action.data.rooms ? mergeRooms(state, action.data.rooms) : state;

      return Object.assign({}, mergedState, {
        active: action.data.active || state.active
      });

    case NEW_MESSAGE:
      const room = state.rooms[action.data.room];

      return Object.assign({}, state, {
        rooms: Object.assign({}, state.rooms, {
          [action.data.room]: {
            messages: [
              ...room.messages,
              {
                username: action.data.username,
                message: action.data.message
              }
            ]
          }
        })
      });

    default:
      return state;
  }
}
