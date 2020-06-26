import React from 'react';
import Post from "../Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {deleteFetchedPost, fetchPosts} from "../../store/actions";
import {Loader} from "../Loader/Loader";

export default () => {
    const dispatch = useDispatch();
    const posts = useSelector( state => state.posts.fetchedPosts);
    const loading = useSelector(state => state.app.isLoading);


    if(loading){
        return (
            <Loader />
        )
    }

    if(!posts.length) {
        return <button
            className="btn btn-primary"
            onClick={() => dispatch(fetchPosts())}
        >
            Загрузить
        </button>
    }
    return posts.map(post => <Post post={post} key={post.id} deleteSomePost={() => dispatch(deleteFetchedPost(post.id))}/>);

};