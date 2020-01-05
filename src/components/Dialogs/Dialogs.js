import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id} activeClassName = {s.dialogActive} > {props.name} </NavLink>
        </div>
    );
}


const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
}



const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dima" id="1" />
                <DialogItem name="Andrew" id="2" />
                <DialogItem name="Misha" id="3" />
                <DialogItem name="Mark" id="4" />

            </div>
            <div className={s.messages}>
                <Message message="Fisrst message" />
                <Message message="Second message" />
                <Message message="Third message" />
            </div>
        </div>

    );
}

export default Dialogs;
