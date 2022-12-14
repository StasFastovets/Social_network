import item from './Info.module.css'
import img from '../../../logo/phoneProfile.webp'
import Preloader from './../../common/preloader/preloader';


const Info = (props) => {
   if(props.profile == null || props.profile == undefined) {
      return <Preloader />
   } 
   return (
      <div className={item.content}>
         <img className={item.img} src={img} alt="image"></img>
         <div className={item.info}>
            {/* <img className={item.info_img} src="https://phlearn.com/wp-content/uploads/2019/04/Beginners-Photoshop-Double-Exposure-After.jpg" alt="#"></img> */}
            <img className={item.info_img} src={props.profile.photos.large} alt="#"></img>
            <div className={item.info_text}>
               {/* <div className={item.info_top}>Fastovets S.</div>
               <div className={item.info_bottom}>Date of birth: 19 january</div>
               <div className={item.info_bottom}>City: Ichnya</div>
               <div className={item.info_bottom}>E-mail: fastovets.stas@gmail.com</div> */}
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