import React, { FC, useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';
import userAvatarPlug from '../../../assets/images/userAvatarPlug.png';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatusHooks'
import ProfileDataForm from './ProfileDataForm'
import { ProfileType } from '../../../types/types';

type ProfilePropsType = {
	profile: ProfileType | null
	isOwner: boolean
	status: string
	savePhoto: (file: any) => void	
	updateStatus: (status: string) => void
	saveProfile: (formData: FormDataType) => any
}
export type FormDataType = {

}

const ProfileInfo = (props: ProfilePropsType) => {
    let [editMode, setEditMode] = useState(false);


    if (!props.profile) {
        return <Preloader />
    }
	const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files === null) {
			return 0;
		}
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = async (formData: FormDataType) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        });
    }
    return (
        <div className={s.profileInfo}>
            <div> <img src={props.profile.photos.large ? props.profile.photos.large : userAvatarPlug} alt="img" /> </div>
            {editMode ?
				<ProfileDataForm onSubmit={onSubmit} initialValues={props.profile}
					profile={props.profile}
				/> :
				<ProfileData
                    profile={props.profile}
					isOwner={props.isOwner}
					status={props.status}
                    activateEditMode={() => { setEditMode(true) }}
                    updateStatus={props.updateStatus}/>}
            {props.isOwner ? <input type={"file"} onChange={onMainPhotoSelected} /> : null}

        </div>
    );
}
type ContactPropsType = {
	contactTitle: any
	contactValue: any
}

const Contact:FC<ContactPropsType> = ({ contactTitle, contactValue }) => {
    return contactValue && <div className={s.contact} > {contactTitle}: {contactValue}</div >

}

type ProfileDataType = {
	activateEditMode: () => void
	isOwner: boolean
	profile: ProfileType
	status: string
	updateStatus: (status: string) => void
} 
const ProfileData:FC<ProfileDataType> = (props) => {
    return <div className={s.info}>
        {props.isOwner && <div><button onClick={props.activateEditMode}>Edit</button></div>}
        <div><b>Full name:</b> {props.profile.fullName}</div>
        <div><b>Looking for ad job:</b> {props.profile.lookingForAJob ? "Yes" : "No"}</div>
        {props.profile.lookingForAJob &&
            <div>Proffestional skills: {props.profile.lookingForAJobDescription}</div>}

        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        <div className={s.contactList}>
            <b>Contacts:</b>
            <div>
                {Object.keys(props.profile.contacts).map(key =>
                    <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />)}
            </div>
        </div>

    </div>
}


export default ProfileInfo;
