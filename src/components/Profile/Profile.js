import React from 'react';
import s from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts';



const Profile = () => {
    return (
        <main className = {s.content}>
            <div>
                <img src="https://oboi.ws/filters/earlybird_24_8740_oboi_gregori_haus_1400x1050.jpg" alt ="img" />               

            </div>
            <div>
                ava + description
			</div>
            <MyPosts />
        </main>
    );
}

export default Profile;
