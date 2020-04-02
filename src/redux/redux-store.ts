import { createStore, combineReducers, applyMiddleware, } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';


import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

import { reducer as formReducer } from "redux-form";

import thunkMiddleware from "redux-thunk"


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsBlock: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

let state: AppStateType
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware),
));

export default store;
// @ts-ignore
window.store = store;