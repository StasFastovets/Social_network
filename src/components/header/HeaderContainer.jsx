import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Header from './Header';
import { setUserDataAC, setUserPhotoAC } from '../../redux/authReducer';
import { getAuth, getProfileOfUser } from '../../API/api';


class HeaderAPIContainer extends React.Component {
   constructor(props) {
      super(props)
   }
   componentDidMount() {
      getAuth().then( data => {
         if (data.resultCode === 0) {
            let email = data.data.email
            let id = data.data.id
            let login = data.data.login
            this.props.setAuthData(email, id, login)

            getProfileOfUser(data.data.id).then(data => {
               if (data.photos.large != null) {
                  let photo = data.photos.large
                  this.props.setAuthUserPhoto(photo)
               }
            })
               
         }
      }) 

   }

   render() {
      return (
         <Header {...this.props} />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
      photo: state.auth.photo,
      id: state.auth.id
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      setAuthData: (email, id, login) => {
         let actionCreator = setUserDataAC(email, id, login)
         dispatch(actionCreator)
      },
      setAuthUserPhoto: (photo) => {
         let actionCreator = setUserPhotoAC(photo)
         dispatch(actionCreator)
      },
   }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer)

export default HeaderContainer;