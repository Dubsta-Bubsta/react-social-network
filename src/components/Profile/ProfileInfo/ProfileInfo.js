import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src="https://oboi.ws/filters/earlybird_24_8740_oboi_gregori_haus_1400x1050.jpg" alt="img" />
            </div>
            <div>
                ava + description
            </div>
        </div>
    );
}
export default ProfileInfo;
