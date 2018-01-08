/* @flow */
import { WpPageActionTypes } from '../../types/wp/pages'

// GET PAGE BY SLUG
export function getPageById (pageId: number) {
  return {
    type: WpPageActionTypes.GET_PAGE_BY_ID,
    pageId
  }
}
export function setPageById (page: {}) {
  return {
    type: WpPageActionTypes.SET_PAGE_BY_ID,
    page
  }
}
export function unsetPageById () {
  return {
    type: WpPageActionTypes.UNSET_PAGE_BY_ID
  }
}
