import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus, savePhoto} from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.authoziedUserId ;
        
        this.props.getProfile(userId);        
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile()
    }
    render() {

        return <Profile {...this.props}
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}/>
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authoziedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto }),
    withRouter,
    withAuthRedirect
    )(ProfileContainer);
