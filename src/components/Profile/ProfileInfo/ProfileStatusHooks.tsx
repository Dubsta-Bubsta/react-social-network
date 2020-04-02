import React, { useState, useEffect } from 'react';

type PropsType = {
	status: string
	updateStatus: (newStatus: string) => void
}

const ProfileStatus = (props: PropsType) => {
    let [editMode, setEditMode] = useState<boolean>(false);
    let [status, setStatus] = useState<string>(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            { !editMode &&
            <div>
                <b>Status: </b> <span onDoubleClick={ activateEditMode }>{status ? status :"Your status"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode }
                       value={status} />
            </div>
            }
        </div>
    )
}


export default ProfileStatus;