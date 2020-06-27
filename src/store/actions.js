import {
    CHANGE_THEME,
    CREATE_POST,
    FETCH_POSTS,
    HIDE_ALERT,
    HIDE_LOADING,
    REMOVE_CREATE_POST, REMOVE_FETCHED_POST,
    SHOW_ALERT,
    SHOW_LOADING
} from "./types";

export function createPost(post){
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function deleteCreatePost(id) {
    return {
        type: REMOVE_CREATE_POST,
        payload: {
            id
        }
    }
}

export function deleteFetchedPost(id) {
    return {
        type: REMOVE_FETCHED_POST,
        payload: {
            id
        }
    }
}

export function showLoading() {
    return {
        type: SHOW_LOADING,
    }
}
export function hideLoading() {
    return {
        type: HIDE_LOADING,
    }
}
export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        });
        setTimeout(() => {
            dispatch(hideAlert());
        },3500)
    }
}
export function hideAlert() {
    return {
        type: HIDE_ALERT,
    }
}

export function fetchPosts() {
    return async dispatch => {
        try {
            dispatch(showLoading());
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
            const json = await response.json();

                dispatch({type: FETCH_POSTS, payload: json});
                dispatch(hideLoading());

        } catch (e) {
            dispatch(showAlert('Что-то пошло не так'));
            dispatch(hideLoading());
        }
    }
}


export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}