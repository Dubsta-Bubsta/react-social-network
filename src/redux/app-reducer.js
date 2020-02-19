import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized: false,   
}

const appReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true,
            };
        }

        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {
        type: SET_INITIALIZED
        
    }
}




export const initializeApp = () => (dispatch) => {    
    debugger
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());        
        });
}


export default appReducer;