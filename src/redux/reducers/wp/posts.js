/* eslint-disable no-use-before-define */
import { combineReducers } from 'redux'
import { WpActionTypes } from '../../actions/types/wp/posts'

// prerender
import { prerenderReady } from '../../../prerender'

export const wpPosts = combineReducers({
  list,
  single
})

export function single (
  state = {
    item: {},
    isFetching: false
  },
  action
) {
  switch (action.type) {
    case WpActionTypes.GET_POST:
      return {
        isFetching: true,
        ...state
      }
    case WpActionTypes.UNSET_POST:
      return {
        isFetching: false,
        item: {}
      }
    case WpActionTypes.SET_POST:
      prerenderReady()
      return {
        isFetching: false,
        item: action.post
      }
    default:
      return state
  }
}

export function list (
  state = {
    items: [],
    isFetching: false
  },
  action
) {
  switch (action.type) {
    case WpActionTypes.LIST_POSTS:
      return {
        isFetching: true,
        ...state
      }
    case WpActionTypes.UNSET_POSTS:
      return {
        isFetching: false,
        items: []
      }
    case WpActionTypes.SET_POSTS:
      prerenderReady()
      return {
        isFetching: false,
        items: action.posts
      }
    default:
      return state
  }
}
