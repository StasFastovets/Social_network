import { viewPostActionCreator } from '../../../redux/profile_reducer';
import Posts from './Posts';
import { connect } from 'react-redux';


// контейнерная компонента это обертка для обычной компоненты

let mapStateToProps = (state) => {
   return {
      addPost: state.profilePage.addPost,
      post: state.profilePage.posts
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addPost: (post) => {
         dispatch(viewPostActionCreator(post))
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default DialogsContainer;