import { WpActionTypes } from '../../types/wp/posts';

// LIST WP POSTS
export function listWpPosts( lang, search = '', limit = 10, query = {}) {
  return {
    type: WpActionTypes.LIST_POSTS,
    lang,
    search,
    limit,
    query,
  }
}
export function setWpPosts(posts) {
  return {
    type: WpActionTypes.SET_POSTS,
    posts,
  }
}
export function unsetWpPosts() {
  return {
    type: WpActionTypes.UNSET_POSTS,
  }
}