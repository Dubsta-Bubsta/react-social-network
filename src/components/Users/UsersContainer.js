import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, getUsers } from '../../redux/users-reducer';
import { compose } from 'redux';


class UsersContainer extends React.Component {
    componentDidMount() {        
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize);       
    }

    render() {
        return <Users
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
    }
}


//Достает из глобального store все данные
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}




export default compose(    
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers}),
)(UsersContainer);