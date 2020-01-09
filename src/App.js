import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import Header from './components/Header/Header';
import NavContainer from './components/Nav/NavContainer'
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = (props) => {
	console.log(props)
	return (
		<div className="app-wrapper">
			<Header />
			<div className='app-container'>
				<NavContainer />
				<div className="app-wrapper-content">
					<Route path="/profile" render={() => <Profile />} />
					<Route path="/dialogs" render={() => <DialogsContainer />} />
					<Route path="/news" component={News} />
					<Route path="/music" component={Music} />
					<Route path="/settings" component={Settings} />
				</div>
			</div>
		</div>
	);
}

export default App;
