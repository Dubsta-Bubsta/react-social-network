import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>            
            <NavLink to={"/dialogs/" + props.id} className={s.dialogContent} activeClassName={s.dialogActive} >
                <img src = "https://avatars.mds.yandex.net/get-pdb/33827/1c0159d3-1456-4d36-93f9-7bce05147cc8/s1200" alt = "friendAvatar"/>
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogItem;
