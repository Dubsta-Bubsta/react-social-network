import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
    let messagesElements = props.state.messages.map(messageItem => <Message message={messageItem.message} id={messageItem.id} key={messageItem.id} />);

    let newMessageRef = React.createRef();
    let sendMessage = () => {
        let text = newMessageRef.current.value;
        console.log(text)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.sendMessage}>
                <textarea ref={newMessageRef}></textarea>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>

    );
}

export default Dialogs;
