import React from 'react';
import s from './Users.module.css';
import Preloader from '../common/Preloader/Preloader'
import Paginator from '../common/Paginator/Paginator';

import User from './User';

const Users = (props) => {
    return (
        <div className={s.usersBlock}>
            <h1>Users</h1>
            {props.isFetching ? <Preloader /> : null}
            <Paginator
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
            />


            <div className={props.isFetching ? s.invisible : s.users}>
                {props.users.map(user =>
                    <User
                        key={user.id}
                        user={user}
                        {...props} />)}
            </div>
        </div>

    )
}

export default Users;