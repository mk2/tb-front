import { combineReducers } from "redux";
import articles from './articles';
import tbfront from "./tbfront";

const rootReducer = combineReducers({
  articles,
  tbfront,
});

export default rootReducer
