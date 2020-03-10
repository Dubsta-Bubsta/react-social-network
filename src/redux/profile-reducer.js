import { profileAPI } from '../api/api';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';

const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SET_PHOTO = 'profile/SET_PHOTO';


let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "it's my post?", likesCount: 22 },
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
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
            debugger
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }
        default:
            return state;
    }
}

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

const setStauts = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}
const setPhoto = (photos) => {
    return {
        type: SET_PHOTO,
        photos
    }
}


export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);   
    dispatch(setUserProfile(response));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStauts(response));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0)
        dispatch(setStauts(status));
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    debugger
    if (response.data.resultCode === 0)
        dispatch(setPhoto(response.data.photos));
}



export default profileReducer;