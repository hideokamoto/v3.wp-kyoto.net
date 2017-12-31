/* eslint-disable no-use-before-define */
import { combineReducers } from 'redux';
import { WpActionTypes } from '../../actions/types/wp/posts';

export const wpPosts = combineReducers({
  list,
});

export function list(state = {
  items: [],
  isFetching: false,
}, action) {
  switch (action.type) {
    case WpActionTypes.LIST_POSTS:
      return {
        isFetching: true,
        ...state,
      };
    case WpActionTypes.UNSET_POSTS:
      return {
        isFetching: false,
        items: []
      }
    case WpActionTypes.SET_POSTS:
      return {
        isFetching: false,
        items: action.posts
      }
    default:
      return state;
  }
}
