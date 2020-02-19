import React from 'react';
import { Route, withRouter } from "react-router-dom";
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav'
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

import { connect } from 'react-redux';
import { initializeApp} from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
	componentDidMount() {
        this.props.initializeApp();
    }
	render() {
		if (!this.props.initialized)
			return Preloader;
		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<div className='app-container'>
					<Nav />
					<div className="app-wrapper-content">
						<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
						<Route path="/dialogs" render={() => <DialogsContainer />} />
						<Route path="/users" render={() => <UsersContainer />} />
	 
						<Route path="/news" component={News} />
						<Route path="/music" component={Music} />
	
						<Route path="/settings" component={Settings} />
						
						<Route path="/login" component={Login} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);