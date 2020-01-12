import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import userAvatarPlug from '../../assets/images/userAvatarPlug.png';
import Preloader from '../common/Preloader/Preloader'


// import Paginator from '../common/Paginator/Paginator';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);       //Количество страниц = всего пользователей / количество на странице
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.usersBlock}>
            <h1>Users</h1>
            {props.isFetching ? <Preloader /> : null}
            {/* <Paginator /> */}
            <div className={s.pagination}>
                {   //Создание кнопок

                    pages.map(page => <span
                        key={page}
                        // page <= 3 || -1 * (props.currentPage - pagesCount) < 3? s.active : null
                        className={props.currentPage === page ? s.currentPage : null}
                        onClick={() => { props.onPageChanged(page) }}>
                        {page}
                    </span>
                    )
                }
            </div>


            <div className={props.isFetching ? s.invisible : s.users}>
                {
                    props.users.map(user =>
                        <div className={s.user} key={user.id}>
                            <div className={s.imgBlock}>
                                <NavLink to={`/profile/${user.id}`}><img src={user.photo != null ? user.photo : userAvatarPlug} alt="avatarImg" /></NavLink>
                                {
                                    user.isFriend ?
                                        <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button> :
                                        <button onClick={() => { props.follow(user.id) }}>Follow</button>
                                }
                            </div>
                            <div className={s.userInfo}>
                                <div className={s.personal}>
                                    {/* <p>{user.name} {user.serName != null ? user.serName : 'Ivanov'}</p> */}
                                    <p>{user.name} Ivanov</p>
                                    <p>{user.status != null ? user.status : 'Hello everyone'}</p>
                                </div>
                                <div className={s.location}>
                                    {/* <p>{user.location.country != undefined ? user.location.country : 'Russia'}</p>
                                        <p>{user.location.city != undefined ? user.location.city : 'Saint-Petersburg'}</p> */}

                                    <p>Russia</p>
                                    <p>Saint-Petersburg</p>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>

    )
}

export default Users;