import Info from './info/Info';
import PostsContainer from './posts/Posts_container';
import elem from './Profile.module.css';



const Profile = (props) => {

   return (
      <div className={elem.profile}>
         <Info profile={props.profile}/>
         <PostsContainer />
      </div>
   )
}

export default Profile;