const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
    users: [
        // { id: 1, img: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg', isFriend: true, fullName: 'Alex', status: 'My own status', location: {country:'Russia', city:'Saint-Petersburg'}},
        // { id: 2, img: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg', isFriend: false, fullName: 'Dmitry', status: 'My own status', location: {country:'Ukraine', city:'Minsk'}},
        // { id: 3, img: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg', isFriend: true, fullName: 'Ivan', status: 'My own status', location: {country:'Ukraine', city:'Donbass'}},
        // { id: 4, img: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg', isFriend: false, fullName: 'Oleg', status: 'My own status', location: {country:'Russia', city:'Tomsk'}},
        // { id: 5, img: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg', isFriend: true, fullName: 'Evgeniy', status: 'My own status', location: {country:'Russia', city:'Sochi'}},
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, isFriend: true };
                    }
                    return user;
                }),
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, isFriend: false };
                    }
                    return user;
                }),
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users],
            }
        }
        default:
            return state;
    }
}


export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}



export default usersReducer;