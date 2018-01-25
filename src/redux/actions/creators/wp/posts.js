/* @flow */
import { WpActionTypes } from '../../types/wp/posts'

// LIST WP POSTS
export function listWpPosts (
  lang: string,
  search: string = '',
  limit: number = 10,
  query: {} = {}
) {
  return {
    type: WpActionTypes.LIST_POSTS,
    lang,
    search,
    limit,
    query
  }
}
export function setWpPosts (posts: {}) {
  return {
    type: WpActionTypes.SET_POSTS,
    posts
  }
}
export function unsetWpPosts () {
  return {
    type: WpActionTypes.UNSET_POSTS
  }
}

// LIST POST(sub, for widget or top)
export function listWpPostByCategory (
  lang: string,
  categoryId: number = 0,
  perPage: number = 3,
  isSub: boolean = true,
  search: string = ''
) {
  const type = (() => {
    if (isSub) return WpActionTypes.LIST_SUB_POSTS
    return WpActionTypes.LIST_POSTS
  })()
  return {
    type,
    lang,
    perPage,
    search,
    categoryId
  }
}
export function setWpSubPosts (categoryId: number = 0, posts: []) {
  return {
    type: WpActionTypes.SET_SUB_POSTS,
    posts,
    categoryId
  }
}
export function unsetWpSubPosts (categoryId: number = 0) {
  return {
    type: WpActionTypes.UNSET_SUB_POSTS,
    categoryId
  }
}
export function clearWpSubPosts () {
  return {
    type: WpActionTypes.CLEAR_SUB_POSTS
  }
}

// GET POST
export function getWpPost (slug: string, lang: string = 'ja') {
  return {
    type: WpActionTypes.GET_POST,
    slug,
    lang
  }
}
export function setWpPost (post: {}) {
  return {
    type: WpActionTypes.SET_POST,
    post
  }
}
export function unsetWpPost () {
  return {
    type: WpActionTypes.UNSET_POST
  }
}
