import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';

import { createField, Input, Textarea } from '../../common/FormControls/FormsControls';
import { reduxForm } from 'redux-form';

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div><button>Save</button></div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
           
            <div><b>Full name:</b>   {createField('Full name', "fullName", [], Input) }</div> 
            <div><b>Looking for ad job:</b>  {createField('Looking for a job?', "lookingForAJob", [], Input, { type: 'checkbox' })}</div>
            <div><b>Proffestional skills:</b> {createField('Proffestional skills:', "lookingForAJobDescription", [], Textarea) }</div> 
            <div><b>About me:</b>  {createField('About me:', "aboutMe", [], Textarea) }     </div> 

           
                 
            <div className={s.contactList}>
                <b>Contacts:</b>
                <div>
                    {Object.keys(props.profile.contacts).map(key =>
                        <div key={key} className={s.contact}>
                            <b>{key}</b>
                            {createField(key, "contacts." + key, [], Input)}
                        </div>)}
                </div>
            </div> 

        </form>
    )
}

const ProfileDataFormRedux = reduxForm({ form: 'editProfile' })(ProfileDataForm);
export default ProfileDataFormRedux;
