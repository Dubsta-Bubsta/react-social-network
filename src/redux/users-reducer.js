const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [
        //    { id: 1, photo: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg', isFriend: true, name: 'Alex', serName: 'Ivanov', status: 'My own status', location: { country: 'Russia', city: 'Saint-Petersburg' } },
        //     { id: 2, photo: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg', isFriend: false, name: 'Dmitry', serName: 'Ivanov', status: 'My own status', location: { country: 'Ukraine', city: 'Minsk' } },
        //     { id: 3, photo: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg', isFriend: true, name: 'Ivan', serName: 'Ivanov', status: 'My own status', location: { country: 'Ukraine', city: 'Donbass' } },
        //     { id: 4, photo: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg', isFriend: false, name: 'Oleg', serName: 'Ivanov', status: 'My own status', location: { country: 'Russia', city: 'Tomsk' } },
        //     { id: 5, photo: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg', isFriend: true, name: 'Evgeniy', serName: 'Ivanov', status: 'My own status', location: { country: 'Russia', city: 'Sochi' } },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
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
                users: action.users,
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        default:
            return state;
    }
}

//Action Creators
export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUsersCount = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export default usersReducer;