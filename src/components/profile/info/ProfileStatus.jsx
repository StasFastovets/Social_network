import Preloader from '../../common/preloader/preloader';
import s from './Info.module.css';
import React from 'react';

class ProfileStatus extends React.Component {
   constructor(props) {
      super(props)
   }
   state = {
      editMode: false,
      status: this.props.status
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
      this.props.updateUserStatus(this.state.status)
   }

   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      })
   }

   componentDidUpdate(prevProps, prevState) {            // синхронизируем локальный State из входящими пропсами
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
   }

   render() {
      return (
         <div className={s.status}>
            {!this.state.editMode ?
               <div className={s.status_top}>
                  <span onClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
               </div> :
               <div className={s.status_buttom}>
                  <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
               </div>                                                                                   //  onBlur - срабатывает, когда фокус уходит из элкмента,  || - или
            }
         </div>
      )
   }
}

export default ProfileStatus;

