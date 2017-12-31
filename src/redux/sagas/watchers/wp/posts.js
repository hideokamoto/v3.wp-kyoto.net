/* eslint-disable no-constant-condition, no-use-before-define */
import {
  call,
  put,
  fork,
  takeEvery,
} from 'redux-saga/effects';

// Action types
import { WpActionTypes } from '../../../actions/types/wp/posts';

// Actions
import * as actions from '../../../actions/creators/wp/posts';

// Workers
import * as workers from '../../workers//wp/posts';

// Utils


export function* wpPostSaga() {
  yield fork(listWpPosts);
}

export function* listWpPosts() {
  yield takeEvery(WpActionTypes.LIST_POSTS, runListWPPosts);
}

export function* runListWPPosts(action) {
  try {
    const {
      lang,
    } = action;
    const data = yield call(workers.listWPPosts, lang)
    yield put(actions.setWpPosts(data))
  } catch (e) {
    yield put(actions.setWpPosts([]))
  }
}
