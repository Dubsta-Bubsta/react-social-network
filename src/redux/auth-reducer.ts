import { profileAPI, authAPI, securityAPI, ResultCodesEnum, ResultCodeForCaptchaEnum } from '../api/api';
import { stopSubmit } from 'redux-form';

import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';

const SET_USER_DATA = 'SEND-USER-DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

let initialState = {
    userId: null as number | null ,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean | null,
    captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action:any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case GET_CAPTCHA_URL: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
}

type SetAuthUserDataActionPayloadType = {
	userId: number | null,
	email: string | null,
	login: string | null, 
	isAuth: boolean | null
}
type SetAuthUserDataActionType = {
	type: typeof SET_USER_DATA,
	payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId:number | null, email:string | null, login:string | null, isAuth:boolean | null) : SetAuthUserDataActionType => {
    return {
        type: SET_USER_DATA,
        payload: { userId, email, login, isAuth }
    }
}
type GetCapthaUrlSuccessActionType = {
	type: typeof GET_CAPTCHA_URL,
	payload: { captchaUrl:string }
}


export const getCapthaUrlSuccess = (captchaUrl: string): GetCapthaUrlSuccessActionType => {
    return {
        type: GET_CAPTCHA_URL,
        payload: { captchaUrl }
    }
}


type ActionsTypes =
	GetCapthaUrlSuccessActionType | SetAuthUserDataActionType;

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunksType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>


export const getAuthUserData = ():ThunksType => async (dispatch) => {	
	let response = await authAPI.auth();
    if (response.resultCode === ResultCodesEnum.Success) {
        let { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha = "") => async (dispatch:any) => {
	let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData());
    } else {
        if (response.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        let message = response.messages.length > 0 ? response.messages[0] : "Any error"
        dispatch(stopSubmit("login", { _error: message }))
    }
}

export const getCaptchaUrl = (): ThunksType => async (dispatch) => {
    let response = await securityAPI.getCaptcha()
    const captchaUrl = response.url;

    dispatch(getCapthaUrlSuccess(captchaUrl))
}

export const logout = (): ThunksType => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}
export default authReducer;