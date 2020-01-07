import React from 'react';
import s from './Post.module.css';
import 'font-awesome/css/font-awesome.min.css';
const Post = (props) => {



    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/4b/af/d7/4bafd76e962e518462f7481911fcdd4e.jpg" alt = "avatar"/>
            
            <span>{props.message}</span>
            <div><i className="fa fa-thumbs-up" aria-hidden="true"></i> {props.likesCount}</div>
            

        </div>
    );
}

export default Post;
