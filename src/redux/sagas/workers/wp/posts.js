import WPAPI from 'wpapi';
const endpoint = 'https://api.wp-kyoto.net/wp-json'
const wp = new WPAPI({endpoint})

export function listWPPosts(lang = 'ja') {
  if (lang !== 'ja') return listWPMultilingalPosts(lang)
  return wp.posts()
}

export function listWPMultilingalPosts(lang = 'en') {
  return wp.url(`${endpoint}/wp/v2/posts?filter[lang]=en&_embed`).get()
}