import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.friendsBlock}>
            <h1>Friends</h1>
            <div className={s.friends}>
                {
                    props.friends.map(friend =>
                        <div className={s.friend} key={friend.id}>
                            <img src={friend.img} alt="friendAvatar" />
                            <p>{friend.name}</p>
                        </div>)
                }
            </div>
        </div>

    );
}

export default Friends;