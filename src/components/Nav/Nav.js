import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

import Friends from './Friends/Friends';

const Nav = (props) => {
    let state = props.siteBar;
    debugger;
    return (
        <div>
            <nav className={s.nav}>
                <NavLink className={s.item} to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                <NavLink className={s.item} to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink>
                <NavLink className={s.item} to="/news" activeClassName={s.activeLink}>News</NavLink>
                <NavLink className={s.item} to="/music" activeClassName={s.activeLink}>Music</NavLink>
                <NavLink className={s.item} to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </nav>

            <Friends friends={state.friends} />

        </div>
    );
}
export default Nav;
