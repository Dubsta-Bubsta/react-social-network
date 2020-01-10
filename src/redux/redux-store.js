import { createStore, combineReducers } from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";



let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage: dialogsReducer,
    friendsBlock: friendsReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;

window.store = store;