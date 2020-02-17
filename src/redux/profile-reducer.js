import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const SET_STATUS = 'SET-STATUS';


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
        default:
            return state;
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

export const setStauts = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}



export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then((response) => {
                dispatch(setUserProfile(response));
            });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then((response) => {
                dispatch(setStauts(response));
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then((response) => {
                if (response.data.resultCode == 0)
                    dispatch(setStauts(status));
            });
    }
}

export default profileReducer;