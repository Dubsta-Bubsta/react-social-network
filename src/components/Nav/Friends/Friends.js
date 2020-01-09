import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';
import { NavLink } from 'react-router-dom';


const Friends = (props) => {
    debugger;
    let friends = props.friends.map(friend => <Friend id={friend.id} name={friend.name} img = {friend.img}  key={friend.id} />);
   
    return (
        <div className = {s.friendsBlock}>
            <h1>Friends</h1>
            
            <NavLink to="/friends" className = {s.friends}>
                { friends }
            </NavLink>
        </div>
    );
}
export default Friends;
