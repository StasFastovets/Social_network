import { changeMessageActionCreator, viewMessageActionCreator } from '../../redux/dialogs_reducer';
import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from './../hoc/AuthNavigate';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
   return {
      dialogs: state.messagesPage,
      isAuth: state.auth.isAuth,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      changeMessage: (text) => {
         let actionCreator = changeMessageActionCreator(text)
         dispatch(actionCreator)
      },
      viewMessage: () => {
         dispatch(viewMessageActionCreator())
       }
   }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer