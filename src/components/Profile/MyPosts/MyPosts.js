import React from 'react';
import s from './MyPosts.module.css';

import Post from './Post/Post';



const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>

                <Post message='Hi, how are you?' likesCount = '23'/>
                <Post message="it's my post?" likesCount = '15'/>


            </div>
        </div>
    );
}

export default MyPosts;
