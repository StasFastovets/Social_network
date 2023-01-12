import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Header from './Header';
import { AuthAC, LogOutAC, setUserDataAC, setUserPhotoAC } from '../../redux/authReducer';
import { getAuth, getProfileOfUser } from '../../API/api';


class HeaderAPIContainer extends React.Component {
   constructor(props) {
      super(props)
   }
   componentDidMount() {
      this.props.Auth()
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
      Auth: () => {
         let actionCreator = AuthAC()
         dispatch(actionCreator)
      },
      LogOut: () => {
         let actionCreator = LogOutAC()
         dispatch(actionCreator)
      },
   }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer)

export default HeaderContainer;