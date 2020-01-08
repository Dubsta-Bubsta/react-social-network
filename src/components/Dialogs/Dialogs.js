import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
    let messagesElements = state.messages.map(messageItem => <Message message={messageItem.message} id={messageItem.id} key={messageItem.id} />);

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onMessageTextChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }
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
