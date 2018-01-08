/* eslint-disable no-constant-condition */
import { fork } from 'redux-saga/effects'

// Custom watchers
import { wpPostSaga } from './watchers/wp/posts'
import { wpPageSaga } from './watchers/wp/page'

export default function * root () {
  yield fork(wpPostSaga)
  yield fork(wpPageSaga)
}
