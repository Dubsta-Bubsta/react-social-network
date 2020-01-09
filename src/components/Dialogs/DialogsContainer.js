import React from 'react';

import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer >
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let onSendMessage = () => {
                        store.dispatch(sendMessageActionCreator())
                    }
                    let onMessageTextChange = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text))
                    }

                    return (
                        <Dialogs updateNewMessageText={onMessageTextChange} sendMessage={onSendMessage} dialogsPage={state} />
                    );


                }
            }

        </StoreContext.Consumer>
    );
}

export default DialogsContainer;
