import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Header from './Header';
import { setUserDataAC, setUserPhotoAC } from '../../redux/authReducer';


class HeaderAPIContainer extends React.Component {
   constructor(props) {
      super(props)
   }
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })   //withCredentials - авторизация, подтверждаем что добавляем cookie к запросу
         .then(response => {
            if (response.data.resultCode === 0) {
               let email = response.data.data.email
               let id = response.data.data.id
               let login = response.data.data.login
               this.props.setAuthData(email, id, login)

               axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`, { withCredentials: true })
               .then(response => {
                  if (response.data.photos.large != null) {
                     let photo = response.data.photos.large
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