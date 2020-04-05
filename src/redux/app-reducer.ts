import { getAuthUserData } from "./auth-reducer"
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';

const SET_INITIALIZED = "SET_INITIALIZED";

export type InitialStateType = {
	initialized: boolean,	
}


let initialState:InitialStateType = {
    initialized: false,
}





const appReducer = (state = initialState, action:any): InitialStateType => {
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
type ActionsTypes =
	InitializedSuccesActionType;

	type GetStateType = () => AppStateType
	type DispatchType = Dispatch<ActionsTypes>
	type ThunksType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

type InitializedSuccesActionType = {
	type: typeof SET_INITIALIZED
}


export const initializedSuccess = () : InitializedSuccesActionType => {
    return {type: SET_INITIALIZED }
}



export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}


export default appReducer;