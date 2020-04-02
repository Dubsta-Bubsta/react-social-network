import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, getUsersFromServer } from '../../redux/users-reducer';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsers } from '../../redux/users-selectors';
import { compose } from 'redux';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
	currentPage: number
	pageSize: number
	isFetching: boolean
	totalUsersCount: number
	users: Array<UserType>
	followingInProgress: Array<number>

}
type MapDispatchPropsType = {
	getUsersFromServer: (currentPage: number, pageSize: number) => void
	unfollow: (userId: number) => void,
	follow: (userId: number) => void,
}
type OwnPropsType = {
	pageTitle: string
	
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType>{
	componentDidMount() {
		this.props.getUsersFromServer(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (page: number) => {
		this.props.getUsersFromServer(page, this.props.pageSize);
	}

	render() {
		return <>
			<h2>{this.props.pageTitle}</h2>
		<Users
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			onPageChanged={this.onPageChanged}
			users={this.props.users}
			follow={this.props.follow}
			unfollow={this.props.unfollow}
			isFetching={this.props.isFetching}
			followingInProgress={this.props.followingInProgress}
			/>
		</>
	}
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	}
}


export default compose(
	connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { follow, unfollow, getUsersFromServer }),
)(UsersContainer);