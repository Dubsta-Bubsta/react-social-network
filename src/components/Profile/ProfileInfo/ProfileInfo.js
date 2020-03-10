import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';
import userAvatarPlug from '../../../assets/images/userAvatarPlug.png';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatusHooks'

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    

    if (!props.profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.profileInfo}>
            <div> <img src={props.profile.photos.large ? props.profile.photos.large : userAvatarPlug} alt="img" /> </div>
            {editMode ? <ProfileDataForm profile={props.profile} /> : <ProfileData profile={props.profile} />}
            {props.isOwner ? <input type={"file"} onChange={onMainPhotoSelected}/> : null}
            
        </div>
    );
}

const Contact = ({ contactTitle, contactValue }) => {
    return contactValue && <div className={s.contact} > {contactTitle}: {contactValue}</div >

}

const ProfileData = (props) => {
    return <div className={s.info}>
        <div><b>Full name:</b> {props.profile.fullName}</div>

        <div><b>Looking for ad job:</b> {props.profile.lookingForAJob ? "Yes" : "No"}</div>
        {props.profile.lookingForAJob &&
            <div>Proffestional skills: {props.profile.lookingForAJobDescription}</div>}

        <div><b>About me:</b> {props.profile.aboutMe}</div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        <div className={s.contactList}>
            <b>Contacts:</b>
            <div>
                {Object.keys(props.profile.contacts).map(key => <Contact contactTitle={key} contactValue={props.profile.contacts[key]} />)}
            </div>
        </div>

    </div>
}

const ProfileDataForm = ({profile}) => {
    
}
export default ProfileInfo;
