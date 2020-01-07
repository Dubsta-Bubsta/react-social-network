import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import state from '../../redux/state';


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
    let messagesElements = props.dialogsPage.messages.map(messageItem => <Message message={messageItem.message} id={messageItem.id} key={messageItem.id} />);
    window.state = state;

    let newMessageRef = React.createRef();
    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageTextChange = () => {
        let text = newMessageRef.current.value;
        props.updateNewMessageText(text);
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div>
                    <div className={s.messages}>
                        {messagesElements}
                    </div>

                </div>
            </div>
            <div className={s.sendMessage}>
                <textarea ref={newMessageRef} onChange={onMessageTextChange} value={props.dialogsPage.newMessageText}/>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>

    );
}

export default Dialogs;
