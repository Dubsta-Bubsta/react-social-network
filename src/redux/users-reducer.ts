import { usersAPI, ResultCodesEnum } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

import { UserType } from '../types/types'
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';



let initialState = {
	users: [] as Array<UserType>,
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [] as Array<number>	//Array of users ids
}

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
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
		case TOGGLE_IS_FOLLOWING: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId)
			}
		}
		default:
			return state;
	}
}


type ActionsTypes =
	FollowSuccessType |
	UnfollowSuccessType |
	SetUsersType |
	SetCurrentPageType |
	SetTotalUsersCountType |
	ToggleIsFetchingType |
	ToggleIsFollowingType;



//Action Creators
type FollowSuccessType = {
	type: typeof FOLLOW,
	userId: number
}

export const followSuccess = (userId: number): FollowSuccessType => {
	return {
		type: FOLLOW,
		userId
	}
}

type UnfollowSuccessType = {
	type: typeof UNFOLLOW,
	userId: number
}

export const unfollowSuccess = (userId: number): UnfollowSuccessType => {
	return {
		type: UNFOLLOW,
		userId
	}
}

type SetUsersType = {
	type: typeof SET_USERS,
	users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersType => {
	return {
		type: SET_USERS,
		users
	}
}

type SetCurrentPageType = {
	type: typeof SET_CURRENT_PAGE,
	currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	}
}

type SetTotalUsersCountType = {
	type: typeof SET_TOTAL_USERS_COUNT,
	totalCount: number
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountType => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		totalCount
	}
}

type ToggleIsFetchingType = {
	type: typeof TOGGLE_IS_FETCHING,
	isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	}
}

type ToggleIsFollowingType = {
	type: typeof TOGGLE_IS_FOLLOWING,
	isFetching: boolean,
	userId: number
}

export const toggleIsFollowing = (isFetching: boolean, userId: number): ToggleIsFollowingType => {
	return {
		type: TOGGLE_IS_FOLLOWING,
		isFetching,
		userId
	}
}

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunksType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUsersFromServer = (currentPage: number, pageSize: number): ThunksType => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setCurrentPage(currentPage));

	let data = await usersAPI.getUsers(currentPage, pageSize);
	dispatch(toggleIsFetching(false));
	dispatch(setUsers(data.items));
	dispatch(setTotalUsersCount(data.totalCount));
}


const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => FollowSuccessType | UnfollowSuccessType) => {
	dispatch(toggleIsFollowing(true, userId));
	let data = await apiMethod(userId);
	if (data.resultCode === ResultCodesEnum.Success) {
		dispatch(actionCreator(userId));
	}
	dispatch(toggleIsFollowing(false, userId));
}

export const follow = (userId: number): ThunksType => async (dispatch) => {
	let apiMethod = usersAPI.follow.bind(usersAPI);

	_followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
}

export const unfollow = (userId: number): ThunksType => async (dispatch) => {
	let apiMethod = usersAPI.unfollow.bind(usersAPI);

	_followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
}
export default usersReducer;