import item from './One_post.module.css'

const Post = (props) => {
   return (
      <div className={item.post}>
         <div className={item.top}>
            <img className={item.img} src="https://img.freepik.com/free-vector/yellow-background-with-halftone-lines-design_1017-30148.jpg?w=360" alt="img_yellow" />
            <div className={item.text}>{props.message}</div>
         </div>
         <div className={item.bottom}>
            <div className={item.likes}>Likes</div>
            <div className={item.likes_count}>{props.likes}</div>
         </div>
      </div>
   )
}

export default Post;