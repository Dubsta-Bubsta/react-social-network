import React from 'react';
import s from './Post.module.css';




const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/4b/af/d7/4bafd76e962e518462f7481911fcdd4e.jpg" />
            Post
            <div>Like</div>
        </div>
    );
}

export default Post;
