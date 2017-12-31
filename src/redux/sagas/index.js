/* eslint-disable no-constant-condition */
import { fork } from 'redux-saga/effects'

// Custom watchers
import { wpPostSaga } from './watchers/wp/posts'

export default function * root () {
  yield fork(wpPostSaga)
}
