const SEND_MESSAGE = 'SEND-MESSAGE';

type MessageType = {
	id: number, 
	message: string
}
type DialogType = {
	id: number, 
	name: string
}




let initialState = {
    messages: [
        { id: 1, message: "Fisrst message" },
        { id: 2, message: "Second message" },
        { id: 3, message: "Third message" },
        { id: 4, message: "Second message" },
        { id: 5, message: "Third message" },
    ] as Array<MessageType>,
    dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Misha' },
        { id: 4, name: 'Mark' },
    ]  as Array<DialogType>
}
export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action:any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: state.messages.length + 1,
                message: action.newMessageBody,
            };

            return {
                ...state,
                messages: [...state.messages, newMessage],     //Сначала все элементы из старого messages и в конец записывается новое сообщение
            };
        }
       

        default:
            return state;
    }
}


type SendMessageActionCreatorType = {
	type: typeof SEND_MESSAGE
	newMessageBody: MessageType
}

export const sendMessageActionCreator = (newMessageBody: MessageType): SendMessageActionCreatorType => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}



export default dialogsReducer;