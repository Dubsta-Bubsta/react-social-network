import React from 'react';
import s from './MyPosts.module.css';

import Post from './Post/Post';


const MyPosts = (props) => {

    // let postsData = [
    //     { id: 1, message: "Hi, how are you?", likesCount: 12 },
    //     { id: 2, message: "it's my post?", likesCount: 22 },
    // ];

    let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id} key={post.id}/>)
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <br />
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
