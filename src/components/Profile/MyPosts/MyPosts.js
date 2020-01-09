import React from 'react';
import s from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = (props) => {
    console.log(props)
    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id} key={post.id} />);
    
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {        
        let text = e.target.value;
        props.updateNewPostText(text);        
    }

    return (       
        <div>
            My posts
            <div className={s.addPost}>
                <textarea ref={newPostElement} onChange={onPostChange} value = {props.newPostText}/>           
                <button onClick={ onAddPost }>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;

