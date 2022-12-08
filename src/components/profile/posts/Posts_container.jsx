
import React from 'react';
import { changePostActionCreator, viewPostActionCreator } from '../../../redux/profile_reducer';
import Posts from './Posts';
import { connect } from 'react-redux';


// контейнерная компонента это обертка для обычной компоненты

let mapStateToProps = (state) => {
   return {
      post: state.profilePage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         let actionCreator = changePostActionCreator(text)
         dispatch(actionCreator)
      },
      addPost: () => {
         dispatch(viewPostActionCreator())
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default DialogsContainer;