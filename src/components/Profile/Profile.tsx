import React, { FC } from 'react';
import s from './Profile.module.css';


import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../types/types';

type PropsType = {
	isOwner: boolean
	profile: ProfileType | null
	status: string
	savePhoto: (file: any) => void
	updateStatus: (status: string) => void
	saveProfile: (profileDataObject: any) => void
}

const Profile:FC<PropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}/>
            <MyPostsContainer />           
        </div>
    );
}

export default Profile;
