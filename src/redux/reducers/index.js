import { combineReducers } from 'redux'
// lib reducers
import { routerReducer } from 'react-router-redux'

// custom reducers
import { wpPosts } from './wp/posts'
import { wpPage } from './wp/pages'

const rootReducer = combineReducers({
  router: routerReducer,
  wpPosts,
  wpPage
})

export default rootReducer
