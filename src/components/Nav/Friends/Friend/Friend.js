import React from 'react';
import s from './Friend.module.css';


const Friends = (props) => {
    return (
        <div className={s.friend}>
            <img src={props.img} alt="friendAvatar" />
            <p>{props.name}</p>
        </div>
    );
}
export default Friends;
