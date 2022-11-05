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
         <Post message="Hi, how are you?" likes="5" />
         <Post message="I want to see you?" likes="3" />
         <Post message="How old are you?" likes="2" />
         <Post message="You are great person :)" likes="1" />
      </div>
   )
}

export default Posts;