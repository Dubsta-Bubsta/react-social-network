import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';


const Friends = (props) => {
    let friends = props.friends.map(friend => <Friend id={friend.id} name={friend.name} img = {friend.img}  key={friend.id} />);
   
    return (
        <div className = {s.friendsBlock}>
           <h1>Friends</h1>
            <div className = {s.friends}>
                { friends }
            </div>
        </div>
    );
}
export default Friends;
