/* @flow */
import WPAPI from 'wpapi'

// util
import { getMainApiUrl } from '../../../../settings/api'
const endpoint = `${getMainApiUrl()}wp-json`
const wp = new WPAPI({ endpoint })

export function getWpPageById (pageId: number, lang: string = 'ja') {
  const resolve = (() => {
    return wp
      .pages()
      .id(pageId)
      .embed()
  })()
  return resolve
    .then(data => {
      if (Object.keys(data).length === 0) throw new Error('post not found')
      return data
    })
    .catch(e => e)
}
