import Post from './one_post/One_post';
import item from './Posts.module.css'

const Posts = () => {
   let postData = [
      {id: 1, message: 'Hi, how are you?', likes: 5},
      {id: 2, message: 'I want to see you!', likes: 3},
      {id: 3, message: 'How old are you?', likes: 2},
      {id: 4, message: 'You are great person :)', likes: 1},
   ]
   return (
      <div className={item.posts}>
         <p className={item.caption}>My posts</p>
         <form className={item.form} action="#" method="post">
            <textarea className={item.form_area} name="comments"></textarea>
            <button className={item.form_button} type='submit'>Send</button>
         </form>
         <Post message={postData[0].message} likes={postData[0].likes} />
         <Post message={postData[1].message} likes={postData[1].likes} />
         <Post message={postData[2].message} likes={postData[2].likes} />
         <Post message={postData[3].message} likes={postData[3].likes} />
      </div>
   )
}

export default Posts;