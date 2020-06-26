import React from 'react';
import Post from "../Post/Post";
import {connect, useDispatch} from "react-redux";
import {deleteCreatePost} from "../../store/actions";

const Posts = ({ syncPosts}) => {
    const dispatch = useDispatch();

    if(!syncPosts.length) {
        return <p className="text-center">
            Постов пока нет
        </p>
    }
    return syncPosts.map(post => <Post post={post} key={post.id} deleteSomePost={() => dispatch(deleteCreatePost(post.id))}/>);
};


const mapStateToProps = state => {
  return {
      syncPosts: state.posts.posts,
  }
};

export default connect(mapStateToProps)(Posts);