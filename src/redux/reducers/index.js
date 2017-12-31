import { combineReducers } from "redux";
// lib reducers
import { routerReducer } from "react-router-redux";

// custom reducers
import { wpPosts } from "./wp/posts";

const rootReducer = combineReducers({
  router: routerReducer,
  wpPosts
});

export default rootReducer;
