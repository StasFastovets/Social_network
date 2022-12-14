import React from 'react';
import Profile from './Profile'
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfileAC } from './../../redux/profile_reducer';


class ProfileAPIContainer extends React.Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
         .then(response => {
            this.props.setUserProfile(response.data)
         })
   }

   render() {
      return (
         <Profile {...this.props} profile={this.props.profile}/>
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

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIContainer);

export default ProfileContainer