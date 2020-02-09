import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router';

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
    let messagesElements = state.messages.map(messageItem => <Message message={messageItem.message} id={messageItem.id} key={messageItem.id} />);

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageTextChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    if (!props.isAuth) return <Redirect to={"login"}/>
    
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>

            <div className={s.sendMessage}>
                <textarea onChange={onMessageTextChange} value={state.newMessageText} />
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div >

    );
}

export default Dialogs;
