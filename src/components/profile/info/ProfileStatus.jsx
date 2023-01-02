import Preloader from '../../common/preloader/preloader';
import s from './Info.module.css';
import React from 'react';

class ProfileStatus extends React.Component {
   state = {
      editMode: false,
   }

   activateEditMode = () => {
      this.setState({                //setState - если изменяем локальный state, работает асинхронно
         editMode: true
      })
   }

   deactivateEditMode = () => {
      this.setState({                
         editMode: false
      })
   }

   render() {
      return (
         <div className={s.status}>
            {!this.state.editMode ?
               <div className={s.status_top}>
                  <span onClick={this.activateEditMode}>{this.props.status}</span>
               </div> :
               <div className={s.status_buttom}>
                  <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.status} />         
               </div>                                                                                   //  onBlur - срабатывает, когда фокус уходит из элкмента 
            }
         </div>
      )
   }
}

export default ProfileStatus;