import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
	console.log(props)
	return (
		<div className="app-wrapper">
			<Header />
			<div className='app-container'>
				<Nav state={props.state.siteBar} />

				<div className="app-wrapper-content">
					<Route path="/profile" render={() => <Profile
						profilePage={props.state.profilePage}
						addPost={props.addPost}
						updateNewPostText={props.updateNewPostText} />} />
					<Route path="/dialogs" render={() => <Dialogs
						dialogsPage={props.state.dialogsPage}
						sendMessage={props.sendMessage}
						updateNewMessageText={props.updateNewMessageText} />} />
					<Route path="/news" component={News} />
					<Route path="/music" component={Music} />
					<Route path="/settings" component={Settings} />
				</div>
			</div>
		</div>
	);
}

export default App;
