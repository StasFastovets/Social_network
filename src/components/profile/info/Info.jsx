import item from './Info.module.css'
import Preloader from './../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus';


const Info = (props) => {
   if (props.profile == null || props.profile == undefined) {
      return <Preloader />
   }
   return (
      <div className={item.content}>
         <ProfileStatus {...props} status={props.status} />
         <div className={item.info}>
            <img className={item.info_img} src={props.profile.photos.large} alt="#"></img>
            <div className={item.info_text}>
               <div className={item.info_top}>{props.profile.fullName}</div>
               <div className={item.info_bottom}>{props.profile.aboutMe}</div>
               <div className={item.info_job}>Ищу ли я работу:
                  {props.profile.lookingForAJob == true ? <span>Да</span> : <span>Нет</span>}
               </div>
               <div className={item.info_jobDescription}>{props.profile.lookingForAJobDescription}</div>
            </div>
         </div>
      </div>
   )
}

export default Info;