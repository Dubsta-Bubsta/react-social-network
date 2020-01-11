import React from 'react';
import s from './Users.module.css';
import Axios from 'axios';
import userAvatarPlug from '../../assets/images/userAvatarPlug.png';

class Users extends React.Component {
    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                console.log(response)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
            });

    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);       //Количество страниц = всего пользователей / количество на странице
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={s.usersBlock}>
                <h1>Users</h1>

                <div className={s.pagination}>
                    {   //Создание кнопок

                        pages.map(page => <span
                            key={page}
                            // page <= 3 || -1 * (page - pagesCount) < 3? s.active : null
                            className={this.props.currentPage === page ? s.currentPage : null}
                            onClick={() => { this.onPageChanged(page) }}>
                            {page}
                        </span>
                        )
                    }
                </div>
                <div className={s.users}>
                    {
                        this.props.users.map(user =>
                            <div className={s.user} key={user.id}>
                                <div className={s.imgBlock}>
                                    <img src={user.photo != null ? user.photo : userAvatarPlug} alt="avatarImg" />
                                    {
                                        user.isFriend ?
                                            <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button> :
                                            <button onClick={() => { this.props.follow(user.id) }}>Follow</button>
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

        );
    }
}

export default Users;