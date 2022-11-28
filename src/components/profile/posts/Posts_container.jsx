
import React from 'react';
import { changePostActionCreator, viewPostActionCreator } from '../../../redux/profile_reducer';
import Posts from './Posts';

// контейнерная компонента это обертка для обычной компоненты
const PostsContainer = (props) => {
  
   const viewPost = () => {
      props.dispatch(viewPostActionCreator());
   }

   const changePost = (text) => {
      let actionCreator = changePostActionCreator(text)
      props.dispatch(actionCreator);
   }

   return (
      <Posts updateNewPostText={changePost} addPost={viewPost} posts={props.store.profilePage.posts} newPostText = {props.store.profilePage.newPostText}/>
   )
}

export default PostsContainer;