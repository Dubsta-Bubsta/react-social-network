const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    messages: [
        { id: 1, message: "Fisrst message" },
        { id: 2, message: "Second message" },
        { id: 3, message: "Third message" },
        { id: 4, message: "Second message" },
        { id: 5, message: "Third message" },
    ],
    dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Misha' },
        { id: 4, name: 'Mark' },
    ],
    newMessageText: 'New message Text',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
            };

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage],     //Сначала все элементы из старого messages и в конец записывается новое сообщение
            };

        }


        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText,
            };
        }

        default:
            return state;
    }
}


export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    }
}



export default dialogsReducer;