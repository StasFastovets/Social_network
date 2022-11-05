import './One_post.css'

const Post = (props) => {
   return (
      <div className="post">
         <div className="post__top">
            <div className="post__img"><img className="post__img_yellow" src="https://img.freepik.com/free-vector/yellow-background-with-halftone-lines-design_1017-30148.jpg?w=360" alt="img_yellow" /></div>
            <div className="post__text">{props.message}</div>
         </div>
         <div className="post__bottom">
            <div className="post__likes">likes</div>
            <div className="post__likes-count">{props.likes}</div>
         </div>
      </div>
   )
}

export default Post;