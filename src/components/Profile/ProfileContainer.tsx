import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import {RouteComponentProps } from 'react-router-dom';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

import { ProfileType } from '../../types/types'
import { AppStateType } from '../../redux/redux-store';




type MapStatePropsType = {
	profile: ProfileType| null
	status: string
	authoziedUserId: number | null
	isAuth: boolean | null
}
type MapDispatchPropsType = {
	getProfile: (userId: number) => void
	getStatus: (userId: number) => void
	updateStatus: (status : string) => void
	savePhoto: (file: any) => void
	saveProfile: (profile: ProfileType) => void
}

interface MatchParams {
    userId: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

type PropsType = MapStatePropsType & MapDispatchPropsType & MatchProps;


class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.authoziedUserId;

		if (!userId) return 0;
        this.props.getProfile(+userId);
        this.props.getStatus(+userId);
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: MatchProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile()
    }
    render() {
        return <Profile {...this.props}
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
            saveProfile={this.props.saveProfile}
            
        />
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
	authoziedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
});


export default compose(
    connect<MapStatePropsType, MapDispatchPropsType,RouteComponentProps, AppStateType>(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
