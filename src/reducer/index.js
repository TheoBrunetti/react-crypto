import { combineReducers } from "redux";
import stableReducer from "./stable.reducer";

export default combineReducers({
    // nos reducers (stable + favoris)
    stableReducer,
});
