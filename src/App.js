import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
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
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<div className='app-container'>
					<Nav />

					<div className="app-wrapper-content">
						<Route path="/profile" render={() => <Profile postsData={props.postsData} />} />
						<Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
						<Route path="/news" component={News} />
						<Route path="/music" component={Music} />
						<Route path="/settings" component={Settings} />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
