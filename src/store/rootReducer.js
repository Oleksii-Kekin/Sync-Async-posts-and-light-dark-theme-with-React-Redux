import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {appReducer} from "./appReducer";
import {themeReducer} from "./themeReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer,
    theme: themeReducer,
});