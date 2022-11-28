import Post from './one_post/One_post';
import item from './Posts.module.css'
import React from 'react';
import { changePostActionCreator, viewPostActionCreator } from '../../../redux/profile_reducer';


// презентационная компонента не получает ничего лишнего, только данные и callback's
const Posts = (props) => {

   let postItems = props.posts.map(elem => <Post message={elem.message} likes={elem.likes} />);

   let linkItem = React.createRef();

   const onAddPost = () => {
      props.addPost()
   }

   const onChangePost = () => {
      let text = linkItem.current.value;
      props.updateNewPostText(text);
   }

   return (
      <div className={item.posts}>
         <p className={item.caption}>My posts</p>
         <div className={item.form}>
            <textarea className={item.form_area} ref={linkItem} value={props.newPostText} onChange={onChangePost} />
            <button className={item.form_button} onClick={onAddPost}>Send</button>
         </div>
         {postItems}
      </div>
   )
}

export default Posts;