import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import userAvatarPlug from '../../assets/images/userAvatarPlug.png';
import { UserType } from '../../types/types'

type UsersPropsType = {
	user: UserType
	followingInProgress:Array<number>
	unfollow: (userId: number) => void,
	follow: (userId: number) => void,
}

const Users:FC<UsersPropsType> = ({ user, followingInProgress, follow, unfollow, ...props}) => {
    return (
        <div className={s.user}>
            <div className={s.imgBlock}>
                <NavLink to={`/profile/${user.id}`}><img src={user.photos.small != null ? user.photos.small : userAvatarPlug} alt="avatarImg" /></NavLink>
                {
                    user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);
                        }}>Unfollow</button> :
                        <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id);
                            }}>Follow</button>
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

export default Users;