import Post from './one_post/One_post';
import s from './Posts.module.css'
import React from 'react';
import { Field, reduxForm } from 'redux-form';


const PostForm = (props) => {
   return (
      <form className={s.form} onSubmit={props.handleSubmit}>
         <Field className={s.form_area} component={'input'} name={'post'} placeholder='Hi, how are your?' type={'textarea'} />
         <button className={s.form_button}>Send</button>
      </form>
   )
}

const PostReduxForm = reduxForm({ form: 'post' })(PostForm)


const Posts = (props) => {

   let posts = props.post.posts.map(elem => <Post message={elem.message} likes={elem.likes} />);

   const onSubmit = (formData) => {
      props.addPost(formData.post)
   }

   return (
      <div className={s.posts}>
         <p className={s.caption}>My posts</p>
         <PostReduxForm onSubmit={onSubmit} />
         {posts}
      </div>
   )
}

export default Posts;