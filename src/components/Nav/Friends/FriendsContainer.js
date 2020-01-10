import { connect } from 'react-redux';
import Friends from './Friends';

let mapStateToProps = (state) => {
    return {
        friends: state.friendsBlock.friends,
    }
}

let mapDispatchToProps = (dispatch) => { 
    return {              

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Friends);
