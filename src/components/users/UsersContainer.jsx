import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, unfollowUserThunkCreator, setUsersActionCreator, setCurrentPageActionCreator, setAllUsersActionCreator, setIsFetchingAC, toggleFollowingProgressAC, getUsersThunkCreator, followUserThunkCreator, unfollowActionCreator } from '../../redux/usersReducer';
import Users from './Users';
import usersPhoto from "../../logo/images.jfif"
import axios from 'axios';
import elem from './Users.module.css';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getfollowingInProgress, getUsersSuperSelector } from './../../redux/users_selectors';


class UsersAPIContainer extends React.Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
   }

   onPageChanget = (page) => {
      this.props.setCurrentPage(page)
      this.props.getUsersThunk(page, this.props.pageSize)
   }

   render() {
      return (
         <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanget={this.onPageChanget}
            currentPage={this.props.currentPage}
            users={this.props.users}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
            isFetching={this.props.isFetching}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
            unfollowUserThunk={this.props.unfollowUserThunk}
            followUserThunk={this.props.followUserThunk}
         />
      )
   }
}

// let mapStateToProps = (state) => {
//    return {
//       users: state.usersPage.users,
//       pageSize: state.usersPage.pageSize,
//       totalUsersCount: state.usersPage.totalUsersCount,
//       currentPage: state.usersPage.currentPage,
//       isFetching: state.usersPage.isFetching,
//       followingInProgress: state.usersPage.followingInProgress,
//    }
// }
let mapStateToProps = (state) => {
   return {
      // users: getUsers(state),
      users: getUsersSuperSelector(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getfollowingInProgress(state),
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      followUser: (userID) => {
         let actionCreator = followActionCreator(userID)
         dispatch(actionCreator)
      },
      unfollowUser: (userID) => {
         let actionCreator = unfollowActionCreator(userID)
         dispatch(actionCreator)
      },
      setCurrentPage: (page) => {
         let actionCreator = setCurrentPageActionCreator(page)
         dispatch(actionCreator)
      },
      unfollowUserThunk: (userID) => {
         let actionCreator = unfollowUserThunkCreator(userID)
         dispatch(actionCreator)
      },
      getUsersThunk: (currentPage, pageSize) => {
         let thunkCreator = getUsersThunkCreator(currentPage, pageSize)
         dispatch(thunkCreator)
      },
      followUserThunk: (userID) => {
         let actionCreator = followUserThunkCreator(userID)
         dispatch(actionCreator)
      },
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer


