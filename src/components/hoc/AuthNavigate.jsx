import React from 'react';
import { Navigate } from 'react-router-dom';


export const withAuthRedirect = (Component) => {
   class RedirectComponent extends React.Component {
      constructor(props) {
         super(props)
      }   
      render() {
         if (!this.props.isAuth) {
            return <Navigate to="/login" />
         }
         return <Component {...this.props} />
      }
   }
   return RedirectComponent
}

