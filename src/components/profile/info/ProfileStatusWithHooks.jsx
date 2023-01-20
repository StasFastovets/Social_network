import Preloader from '../../common/preloader/preloader';
import s from './Info.module.css';
import React, { useEffect, useState } from 'react';


const ProfileStatusWithHooks = (props) => {

   // let stateWithSateState = useState(false)
   // let editMode = stateWithSateState[0]
   // let setEditMode = stateWithSateState[1]    
   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)

   useEffect( () => { 
      setStatus(props.status)
    }, [props.status]) 

   const activateEditMode = () => {
      setEditMode(true)
   }

   const deactivateEditMode = () => {
      setEditMode(false)
      props.updateUserStatus(status)
   }

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
   }

   return (
      <div className={s.status}>
         {!editMode ?
            <div className={s.status_top}>
               <span onClick={activateEditMode}>{props.status || 'No status'}</span>
            </div> :
            <div className={s.status_buttom}>
               <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
            </div>
         }
      </div>
   )
}


export default ProfileStatusWithHooks;

