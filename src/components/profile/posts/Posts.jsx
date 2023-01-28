import Post from './one_post/One_post';
import s from './Posts.module.css'
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';



const maxLength10 = maxLengthCreator(10)

const PostForm = ({newPostText, ...props}) => {
   return (
      <form className={s.form} onSubmit={props.handleSubmit}>
         <Field className={s.form_area} component='input' name='post' placeholder={newPostText} type='Textarea'
            validate={[required, maxLength10]} />
         <button className={s.form_button}>Send</button>
      </form>
   )
}

const PostReduxForm = reduxForm({ form: 'post' })(PostForm)


// class Posts extends PureComponent {
//    constructor(props) {
//       super(props)
//    }

// shouldComponentUpdate(nextProps, nextState) {
//     return nextProps != this.props || nextState != this.state
// }

//    posts = this.props.post.map(elem => <Post message={elem.message} likes={elem.likes} />);

//    onSubmit = (formData) => {
//       this.props.addPost(formData.post)
//    }

//    render() {
//       console.log('render')
//       return (
//          <div className={s.posts}>
//             <p className={s.caption}>My posts</p>
//             <PostReduxForm onSubmit={this.onSubmit} newPostText={props.newPostText}/>
//             {this.posts}
//          </div>
//       )
//    }
// }


const Posts = React.memo((props) => {
   let posts = props.post.map(elem => <Post message={elem.message} likes={elem.likes} />);

   const onSubmit = (formData) => {
      props.addPost(formData.post)
   }
    return (
      <div className={s.posts}>
         <p className={s.caption}>My posts</p>
         <PostReduxForm onSubmit={onSubmit} newPostText={props.newPostText} />
         {posts}
      </div>
   )
})

export default Posts;