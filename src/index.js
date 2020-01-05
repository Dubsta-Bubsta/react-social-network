import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Misha' },
    { id: 4, name: 'Mark' },
];
let messages = [
    { id: 1, message: "Fisrst message" },
    { id: 2, message: "Second message" },
    { id: 3, message: "Third message" },
];
let postsData = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "it's my post?", likesCount: 22 },
];

ReactDOM.render(<App dialogs={dialogs} messages={messages} postsData={postsData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
