import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { LogOutAC } from './../../redux/authReducer';


// class HeaderAPIContainer extends React.Component {
//    constructor(props) {
//       super(props)
//    }
//    componentDidMount() {
//       this.props.Auth()
//    }

//    render() {
//       return (
//          <Header {...this.props} />
//       )
//    }
// }

// let mapStateToProps = (state) => {
//    return {
//       isAuth: state.auth.isAuth,
//       login: state.auth.login,
//       photo: state.auth.photo,
//       id: state.auth.id
//    }
// }

// let mapDispatchToProps = (dispatch) => {
//    return {
//       Auth: () => {
//          let actionCreator = AuthAC()
//          dispatch(actionCreator)
//       },
//       LogOut: () => {
//          let actionCreator = LogOutAC()
//          dispatch(actionCreator)
//       },
//    }
// }

// const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer)

// export default HeaderContainer;

class HeaderAPIContainer extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <Header {...this.props} />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
      photo: state.auth.photo,
      id: state.auth.id
   }
}

const HeaderContainer = connect(mapStateToProps, {LogOutAC})(HeaderAPIContainer)

export default HeaderContainer;