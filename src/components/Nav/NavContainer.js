import React from 'react';
import Nav from './Nav';

import { connect } from 'react-redux';


debugger;
let mapStateToProps = (state) => {
    return {
        siteBar: state.siteBar,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {        

    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;


