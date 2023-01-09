import { viewMessageActionCreator } from '../../redux/dialogs_reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../hoc/AuthNavigate';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
   return {
      dialogs: state.messagesPage,
      isAuth: state.auth.isAuth,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      viewMessage: (message) => {
         dispatch(viewMessageActionCreator(message))
      }
   }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer