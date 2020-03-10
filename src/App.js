import React, { Suspense } from 'react';
import { Route, withRouter } from "react-router-dom";
import './App.css';

import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav'

import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

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
						<Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
						<Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
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

let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);

let MainApp = (props) => (
	<BrowserRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>
)

export default MainApp;