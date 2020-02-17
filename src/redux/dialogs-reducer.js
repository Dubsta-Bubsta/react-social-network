const SEND_MESSAGE = 'SEND-MESSAGE';


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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: state.messages.length + 1,
                message: action.newMessageBody,
            };

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage],     //Сначала все элементы из старого messages и в конец записывается новое сообщение
            };
        }
       

        default:
            return state;
    }
}


export const sendMessageActionCreator = (newMessageBody) => {
    debugger
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}



export default dialogsReducer;