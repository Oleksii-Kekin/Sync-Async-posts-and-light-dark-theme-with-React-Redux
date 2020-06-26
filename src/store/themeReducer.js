import {CHANGE_THEME} from "./types";

const initialState = {
    value: 'light'
};

export function themeReducer (state = initialState, {type, payload}) {
    switch (type) {
        case CHANGE_THEME:
            return {...state, value: payload};
        default: return state
    }

}