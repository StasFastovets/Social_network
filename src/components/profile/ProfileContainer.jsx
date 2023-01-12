import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { getProfileOfUserAC, getStatusOfUserAC, updateStatus } from './../../redux/profile_reducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from './../hoc/AuthNavigate';


class ProfileAPIContainer extends React.Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      let userId = this.props.router.params.userId
      if (!userId) {
         userId = this.props.authorizedUserID
      }
      this.props.getProfileOfUser(userId)
      this.props.getUserStatus(userId)
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
      status: state.profilePage.status,
      authorizedUserID: state.auth.id,
   }

}

let mapDispatchToProps = (dispatch) => {
   return {
      getProfileOfUser: (userID) => {
         let actionCreator = getProfileOfUserAC(userID)
         dispatch(actionCreator)
      },
      getUserStatus: (userID) => {
         let actionCreator = getStatusOfUserAC(userID)
         dispatch(actionCreator)
      },
      updateUserStatus: (status) => {
         let actionCreator = updateStatus(status)
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

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthRedirectComponent))

export default ProfileContainer