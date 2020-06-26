import {CREATE_POST, FETCH_POSTS, REMOVE_CREATE_POST, REMOVE_FETCHED_POST, REMOVE_POST} from "./types";

const initialState ={
    posts: [],
    fetchedPosts:[],
};

export function postsReducer (state = initialState, {type, payload})  {


    switch (type) {
        case CREATE_POST:
            return { ...state, posts: state.posts.concat([payload])};

        case REMOVE_CREATE_POST:
            const { posts } = state;
            const  newItems = posts.filter(item => item.id !== payload.id);
            return {...state, posts: newItems};

        case REMOVE_FETCHED_POST:
            const { fetchedPosts } = state;
            const  newItem = fetchedPosts.filter(item => item.id !== payload.id);
            return {...state, fetchedPosts: newItem};

        case FETCH_POSTS:
            return {...state, fetchedPosts: payload};

        default: return state;
    }
}