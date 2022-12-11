import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setAllUsersActionCreator, setIsFetchingAC } from '../../redux/usersReducer';
import Users from './Users';
import usersPhoto from "../../logo/images.jfif"
import axios from 'axios';
import elem from './Users.module.css';


class UsersAPIContainer extends React.Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      this.props.setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.addUsers(response.data.items)
            this.props.setAllUsers(response.data.totalCount)
            this.props.setIsFetching(false)
         })
   }

   onPageChanget = (page) => {
      this.props.setCurrentPage(page)
      this.props.setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).
         then(response => {
            this.props.addUsers(response.data.items)
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
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer


