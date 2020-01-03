import React from 'react';
import s from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts';



const Profile = () => {
    return (
        <main className = {s.content}>
            <div>
                <img src="https://s1.1zoom.me/big3/147/Waterfalls_Summer_Rivers_Rays_of_light_563524_2800x1874.jpg" alt ="img" />
            </div>
            <div>
                ava + desc
			</div>
            <MyPosts />
        </main>
    );
}

export default Profile;
