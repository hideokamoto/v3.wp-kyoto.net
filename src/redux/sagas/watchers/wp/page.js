/* eslint-disable no-constant-condition, no-use-before-define */
import { call, put, fork, take } from 'redux-saga/effects'

// Action types
import { WpPageActionTypes } from '../../../actions/types/wp/pages'

// Actions
import * as actions from '../../../actions/creators/wp/pages'

// Workers
import * as workers from '../../workers/wp/page'

// Utils

export function * wpPageSaga () {
  yield fork(getWpPageById)
}

export function * getWpPageById () {
  while (true) {
    const { pageId } = yield take(WpPageActionTypes.GET_PAGE_BY_ID)
    try {
      const data = yield call(workers.getWpPageById, pageId)
      yield put(actions.setPageById(data))
    } catch (e) {
      yield put(actions.setPageById({}))
    }
  }
}
