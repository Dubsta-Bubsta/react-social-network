import React from 'react';
import s from './Users.module.css';


const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, img: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg', isFriend: true, name: 'Alex', serName: 'Ivanov', status: 'My own status', location: { country: 'Russia', city: 'Saint-Petersburg' } },
            { id: 2, img: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg', isFriend: false, name: 'Dmitry', serName: 'Ivanov', status: 'My own status', location: { country: 'Ukraine', city: 'Minsk' } },
            { id: 3, img: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg', isFriend: true, name: 'Ivan', serName: 'Ivanov', status: 'My own status', location: { country: 'Ukraine', city: 'Donbass' } },
            { id: 4, img: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg', isFriend: false, name: 'Oleg', serName: 'Ivanov', status: 'My own status', location: { country: 'Russia', city: 'Tomsk' } },
            { id: 5, img: 'https://st2.depositphotos.com/1002315/8453/i/950/depositphotos_84538216-stock-photo-man-fashion.jpg', isFriend: true, name: 'Evgeniy', serName: 'Ivanov', status: 'My own status', location: { country: 'Russia', city: 'Sochi' } },
        ]);
    }


    return (
        <div className={s.usersBlock}>
            <h1>Users</h1>
            <div className={s.users}>
                {
                    props.users.map(user =>
                        <div className={s.user} key={user.id}>
                            <div className={s.imgBlock}>
                                <img src={user.img} alt="avatarImg" />
                                {
                                    user.isFriend ?
                                        <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button> :
                                        <button onClick={() => { props.follow(user.id) }}>Follow</button>
                                }
                            </div>
                            <div className={s.userInfo}>
                                <div className = {s.personal}>
                                    <p>{user.name} {user.serName}</p>
                                    <p>{user.status}</p>
                                </div>
                                <div className={s.location}>
                                    <p>{user.location.country}</p>
                                    <p>{user.location.city}</p>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>

    );
}

export default Users;