/* eslint-disable no-use-before-define */
import { combineReducers } from 'redux';
import { WpActionTypes } from '../../actions/types/wp/posts';

export const wpPosts = combineReducers({
  dummy
});

export function dummy(state = {
}, action) {
  switch (action.type) {
    case WpActionTypes.DUMMY:
      return { param: true}
    default:
      return state;
  }
}
