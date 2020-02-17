import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
    let messagesElements = state.messages.map(messageItem => <Message message={messageItem.message} id={messageItem.id} key={messageItem.id} />);

    let addNewMessage = (values) => {
        console.log(values)
        props.sendMessage(values.newMessageBody);
    }
    // if (!props.isAuth) return <Redirect to={"login"} />

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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div >

    );
}

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                name="newMessageBody"
                placeholder="Enter your message"
                validate={[required, maxLength50]}/>
            <button>Отправить</button>
        </form >
    )
}

let AddMessageFormRedux = reduxForm({ form: 'addMessageForm' })(AddMessageForm)
export default Dialogs;
