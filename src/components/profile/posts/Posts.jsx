import Post from './one_post/One_post';
import './Posts.css'

const Posts = () => {
   return (
      <div className="posts">
         <p className="posts__caption">My posts</p>
         <form className='posts__form' action="#" method="post">
            <textarea className='posts__form-area' name="comments"></textarea>
            <button className='posts__form-button' type='submit'>Send</button>
         </form>
         <Post />
         <Post />
         <Post />
         <Post />
      </div>
   )
}

export default Posts;