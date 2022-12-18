import React from 'react';
import Profile from './Profile'
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfileAC } from './../../redux/profile_reducer';
import { useParams } from 'react-router-dom';


class ProfileAPIContainer extends React.Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      let userId = this.props.router.params.userId
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
         .then(response => {
            this.props.setUserProfile(response.data)
         })
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
   }

}

let mapDispatchToProps = (dispatch) => {
   return {
      setUserProfile: (profile) => {
         let actionCreator = setUserProfileAC(profile)
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

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileAPIContainer));

export default ProfileContainer