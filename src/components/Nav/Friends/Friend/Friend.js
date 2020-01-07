import React from 'react';
import s from './Friend.module.css';


const Friends = (props) => {   
    console.log(props)
    return (
        <div className={s.friend}>
            <img src={props.img}/>
            <p>{props.name}</p>
        </div>
    );
}
export default Friends;
