/* @flow */
export function formatRenderedMarkup (content: string) {
  return { __html: content }
}

export function formatDate (date: string) {
  return new Date(date).toLocaleString()
}
