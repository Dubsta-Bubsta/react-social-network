import { profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

import { PhotosType, ProfileType, PostType } from '../types/types'


const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';

const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SET_PHOTO = 'profile/SET_PHOTO';




let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "it's my post?", likesCount: 22 },
    ] as Array<PostType>,
    profile: null as ProfileType | null,
	status: "",
	newPostText: ""
}

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action:any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0,
            };

            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            };
        }
            
        case SET_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            };
        }
        default:
            return state;
    }
}

type DeletePostType = {
	type: typeof DELETE_POST
	postId: number
}

export const deletePost = (postId: number): DeletePostType => {
    return {
        type: DELETE_POST,
        postId
    }
}

type AddPostActionCreatorType = {
	type: typeof ADD_POST
	newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => {
    return {
        type: ADD_POST,
        newPostText
    }
}
type SetUserProfileType = {
	type: typeof SET_USER_PROFILE
	profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

type SetStautsType = {
	type: typeof SET_STATUS
	status: string
}

const setStauts = (status: string): SetStautsType => {
    return {
        type: SET_STATUS,
        status
    }
}

type SetPhotoType = {
	type: typeof SET_PHOTO
	photos: PhotosType
}

const setPhoto = (photos: PhotosType): SetPhotoType => {
    return {
        type: SET_PHOTO,
        photos
    }
}


export const getProfile = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId);   
    dispatch(setUserProfile(response));
}
export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStauts(response));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0)
        dispatch(setStauts(status));
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0)
        dispatch(setPhoto(response.data.photos));
}
export const saveProfile = (profileDataObject: ProfileType) => async (dispatch: any, getState: any) => {
    const response = await profileAPI.saveProfile(profileDataObject);

    const id = getState().auth.userId;    

    if (response.resultCode === 0) 
        dispatch(getProfile(id));
    else {
        dispatch(stopSubmit("editProfile", { _error: response.messages[0] }));
        return Promise.reject();
    }
}


export default profileReducer;