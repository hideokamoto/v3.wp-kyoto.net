/* eslint-disable no-constant-condition, no-use-before-define */
import {
  take,
  call,
  put,
  fork,
} from 'redux-saga/effects';

// Action types
import { WpActionTypes } from '../../../actions/types/wp/posts';

// Actions
import * as actions from '../../../actions/creators/wp/posts';

// Workers
// import * as workers from '../worker/wp';

// Utils


export function* wpPostSaga() {
  yield fork(dummy);
}

export function* dummy() {
  while (true) {
    yield take(WpActionTypes.DUMMY);
    try {
      console.log('ok')
    } catch (e) {
    }
  }
}
