import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setAllUsersActionCreator, setIsFetchingAC, toggleFollowingProgressAC } from '../../redux/usersReducer';
import Users from './Users';
import usersPhoto from "../../logo/images.jfif"
import axios from 'axios';
import elem from './Users.module.css';
import { getUsers } from './../../API/api';


class UsersAPIContainer extends React.Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      this.props.setIsFetching(true)
      getUsers(this.props.currentPage, this.props.pageSize).then(data => {
         this.props.addUsers(data.items)
         this.props.setAllUsers(data.totalCount)
         this.props.setIsFetching(false)
      })
   }

   onPageChanget = (page) => {
      this.props.setCurrentPage(page)
      this.props.setIsFetching(true)
      getUsers(page, this.props.pageSize).then(data => {
            this.props.addUsers(data.items)
            this.props.setIsFetching(false)
         })
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
         />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
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
      },
      setCurrentPage: (page) => {
         let actionCreator = setCurrentPageActionCreator(page)
         dispatch(actionCreator)
      },
      setAllUsers: (users) => {
         let actionCreator = setAllUsersActionCreator(users)
         dispatch(actionCreator)
      },
      setIsFetching: (isFetching) => {
         let actionCreator = setIsFetchingAC(isFetching)
         dispatch(actionCreator)
      },   
      toggleFollowingProgress: (isFetching, userID) => {
         let actionCreator = toggleFollowingProgressAC(isFetching, userID)
         dispatch(actionCreator)
         }
      }
   }


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer


