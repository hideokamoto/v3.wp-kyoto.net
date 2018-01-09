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
    subItems: {},
    isFetching: false
  },
  action
) {
  let { subItems } = state
  switch (action.type) {
    case WpActionTypes.UNSET_SUB_POSTS:
    case WpActionTypes.LIST_SUB_POSTS:
      return {
        ...state,
        subItems: {
          ...subItems,
          [action.categoryId]: []
        }
      }
    case WpActionTypes.LIST_POSTS:
      return {
        ...state,
        isFetching: true,
        items: []
      }
    case WpActionTypes.UNSET_POSTS:
      return {
        ...state,
        isFetching: false,
        items: []
      }
    case WpActionTypes.CLEAR_SUB_POSTS:
      return {
        ...state,
        subItems: {}
      }
    case WpActionTypes.SET_POSTS:
      prerenderReady()
      return {
        ...state,
        isFetching: false,
        items: action.posts
      }
    case WpActionTypes.SET_SUB_POSTS:
      prerenderReady()
      return {
        ...state,
        subItems: {
          ...subItems,
          [action.categoryId]: action.posts
        }
      }
    default:
      return state
  }
}
