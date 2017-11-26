/* eslint-disable no-constant-condition */
import { fork } from 'redux-saga/effects';

// Custom watchers
import { wpPostSaga } from './watchers/wp/post';

export default function* root() {
  yield fork(wpPostSaga);
}
