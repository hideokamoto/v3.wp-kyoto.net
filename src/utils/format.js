export function formatRenderedMarkup (content) {
  return { __html: content }
}

export function formatDate (date) {
  return new Date(date).toLocaleString()
}
