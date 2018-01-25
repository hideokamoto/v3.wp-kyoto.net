import WPAPI from 'wpapi'

// util
import { getMainApiUrl } from '../../../../settings/api'
const endpoint = `${getMainApiUrl()}wp-json`
const wp = new WPAPI({ endpoint })

export function listWPPosts (lang = 'ja', search) {
  if (lang !== 'ja') return listWPMultilingalPosts(lang)
  const postList = wp.posts()
  if (!search) return postList
  return postList.search(search)
}

export function listWPSubPosts (
  lang = 'ja',
  categoryId = 0,
  search,
  perPage = 3
) {
  const postList = wp
    .posts()
    .categories(categoryId)
    .perPage(perPage)
  if (!search) return postList
  return postList.search(search)
}

export function listWPMultilingalPosts (lang = 'en') {
  return wp.url(`${endpoint}/wp/v2/posts?filter[lang]=en&_embed`).get()
}

export function getWpPostBySlug (slug, lang = 'ja') {
  const resolve = (() => {
    if (lang !== 'ja') return getWPMultilingalPost(slug, lang)
    return wp
      .posts()
      .slug(slug)
      .embed()
  })()
  return resolve
    .then(data => {
      if (data.length === 0) throw new Error('post not found')
      return data[0]
    })
    .catch(e => e)
}

export function getWPMultilingalPost (slug, lang = 'en') {
  return wp
    .url(`${endpoint}/wp/v2/posts?filter[lang]=en&_embed&slug=${slug}`)
    .get()
}
