import React from 'react';
import s from './ProfileInfo.module.css';
import userAvatarPlug from '../../../assets/images/userAvatarPlug.png';
import Preloader from '../../common/Preloader/Preloader'
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
       
        <div className={s.profileInfo}>
            <div>
                <img src={props.profile ? props.profile.photos.large : userAvatarPlug} alt="img" />
            </div>
            <div>
                ava + description
            </div>
        </div>
    );
}
export default ProfileInfo;
