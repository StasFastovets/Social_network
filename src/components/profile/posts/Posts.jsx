import Post from './one_post/One_post';
import item from './Posts.module.css'
import postData from './../../../index';
import React from 'react';


const Posts = (props) => {
   
   let postItems = props.post.posts.map(elem => <Post message={elem.message} likes={elem.likes} />);

   let linkItem = React.createRef();

   const viewPost = () => {
      props.addPost();
   }

   const changePost = () => { 
      let text = linkItem.current.value;
      props.updatePostText(text);
    }

   return (
      <div className={item.posts}>
         <p className={item.caption}>My posts</p>
         <div className={item.form}>
            <textarea className={item.form_area} ref={linkItem} value={props.post.newPostText} onChange={changePost} />
            <button className={item.form_button} onClick={viewPost}>Send</button>
         </div>
         {postItems}
      </div>
   )
}

export default Posts;