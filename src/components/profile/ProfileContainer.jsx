import React from 'react';
import Profile from './Profile'
import axios from 'axios';
import { connect } from 'react-redux';
import { getProfileOfUserAC, setUserProfileAC } from './../../redux/profile_reducer';
import { useParams, Navigate } from 'react-router-dom';
import { getProfileOfUser } from './../../API/api';
import Login from '../login/login';
import { withAuthRedirect } from './../hoc/AuthNavigate';


class ProfileAPIContainer extends React.Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      let userId = this.props.router.params.userId
      if (!userId) {
         userId = 2
      }
      this.props.getProfileOfUser(userId)
   }

   render() {
      
      return (
         <Profile {...this.props} profile={this.props.profile} />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      isAuth: state.auth.isAuth,
   }

}

let mapDispatchToProps = (dispatch) => {
   return {
      getProfileOfUser: (userID) => {
         let actionCreator = getProfileOfUserAC(userID)
         dispatch(actionCreator)
      },
   }
}

function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ params }}
         />
      );
   }

   return ComponentWithRouterProp;
}

let AuthRedirectComponent = withAuthRedirect(ProfileAPIContainer)

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthRedirectComponent));

export default ProfileContainer