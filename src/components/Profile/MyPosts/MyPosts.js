import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormsControls';

const MyPosts = React.memo(props => {
        let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id} key={post.id} />);

        let addPost = (values) => {
            props.addPost(values.newPostText);
        }

        return (
            <div>
                My posts
            <div className={s.addPost}>
                    <AddPostFormRedux onSubmit={addPost} />
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        );
})

const maxLength10 = maxLengthCreator(10);
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                    validate={[required, maxLength10]} />
            </div>
            <button>Add post</button>
        </form>
    )
}

let AddPostFormRedux = reduxForm({ form: 'AddPostForm' })(AddPostForm);

export default MyPosts;

