import {HIDE_ALERT, HIDE_LOADING, SHOW_ALERT, SHOW_LOADING} from "./types";

const initialState = {
  isLoading: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return {...state, isLoading: true};
        case HIDE_LOADING:
            return {...state, isLoading: false};
        case SHOW_ALERT:
            return {...state, alert: action.payload};
        case HIDE_ALERT:
            return {...state, alert: null};
        default: return state;
    }
};