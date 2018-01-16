/* eslint-disable no-use-before-define */
import { combineReducers } from 'redux'
import { WpPageActionTypes } from '../../actions/types/wp/pages'

// prerender
import { prerenderReady } from '../../../prerender'

export const wpPage = combineReducers({
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
    case WpPageActionTypes.GET_PAGE_BY_ID:
      return {
        isFetching: true,
        ...state
      }
    case WpPageActionTypes.UNSET_PAGE_BY_ID:
      return {
        isFetching: false,
        item: {}
      }
    case WpPageActionTypes.SET_PAGE_BY_ID:
      prerenderReady()
      return {
        isFetching: false,
        item: action.page
      }
    default:
      return state
  }
}
