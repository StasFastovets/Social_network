import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/usersReducer';
import Users from './Users';


let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount
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
      addUsers: (users) => {
         let actionCreator = setUsersActionCreator(users)
         dispatch(actionCreator)
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer