
import { changeMessageActionCreator, viewMessageActionCreator } from '../../redux/dialogs_reducer';
import React from 'react';
import Dialog from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
   return {
      dialogs: state.messagesPage,
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogsContainer