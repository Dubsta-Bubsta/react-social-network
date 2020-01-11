import { connect } from 'react-redux';
import Users from './Users';
import { followAC,unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from '../../redux/users-reducer';

//Достает из глобального store все данные
let mapStateToProps = (state) => { 
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
    }
}
//Возвращает нужные колбеки
let mapDispatchToProps = (dispatch) => {
    return {       
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);        //Компонента Users получает все пропсы через connect
