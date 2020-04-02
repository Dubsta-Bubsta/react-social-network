import React, { FC } from 'react';
import s from './Users.module.css';
import Preloader from '../common/Preloader/Preloader'
import Paginator from '../common/Paginator/Paginator';

import User from './User';
import { UserType } from '../../types/types';

type PropsType = {
	currentPage: number,
	totalUsersCount: number,
	pageSize: number,
	onPageChanged: (page:number) => void,
	users: Array<UserType>,
	isFetching: boolean,
	unfollow: (userId: number) => void,
	follow: (userId: number) => void,
	followingInProgress:Array<number>
}


const Users:FC<PropsType> = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, isFetching, ...props}) => {
    return (
        <div className={s.usersBlock}>
            <h1>Users</h1>
            {isFetching ? <Preloader /> : null}
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />


            <div className={isFetching ? s.invisible : s.users}>
                {users.map(user =>
                    <User
						key={user.id}
						user={user}
						unfollow={props.unfollow}
						follow={props.follow}
						followingInProgress={props.followingInProgress}
                        />)}
            </div>
        </div>

    )
}

export default Users;