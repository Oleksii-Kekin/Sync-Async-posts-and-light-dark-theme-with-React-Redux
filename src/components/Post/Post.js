import React from 'react';
import './Post.scss'


export default  ({ post, deleteSomePost }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    {post.title}
                    <span
                        className="material-icons btn-delete"
                        onClick={deleteSomePost}
                    >
                        delete
                    </span>
                </h5>
            </div>
        </div>
    );
};