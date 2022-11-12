import Post from './one_post/One_post';
import item from './Posts.module.css'
import postData from './../../../index';

const Posts = (props) => {
 
   let postItems = props.post.map(elem => <Post message={elem.message} likes={elem.likes} />)

   return (
      <div className={item.posts}>
         <p className={item.caption}>My posts</p>
         <form className={item.form} action="#" method="post">
            <textarea className={item.form_area} name="comments"></textarea>
            <button className={item.form_button} type='submit'>Send</button>
         </form>
         {postItems}
      </div>
   )
}

export default Posts;