import { React } from 'react';
import { Field, reduxForm } from 'redux-form';
import { LogInAC } from '../../redux/authReducer';
import s from './login.module.css'
import { LogOutAC } from './../../redux/authReducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';


const LoginForm = (props) => {
   return (
      <form className={s.form} onSubmit={props.handleSubmit}>
         <div className={s.login}>
            <Field component='input' name='email' placeholder='email' type='email' />
         </div>
         <div className={s.password}>
            <Field component='input' name='password' placeholder='password' type='password' />
         </div>
         <div className={s.remember}>
            <Field component='input' name='remember' type='checkbox' />
            <label>remember me</label>
         </div>
         <div className={s.submit}>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)    // login - уникальное имя для формы

const Login = (props) => {
   const onSubmit = (formData) => {
      props.LogInAC(formData.email, formData.password, formData.rememberMe)
   }

   if (props.isAuth) {
      return <Navigate to={'/profile'} />
   }
   return (
      <div className={s.login}>
         <h1 className={s.caption}>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}

const mapStateToProps = (state) => {
   return { isAuth: state.auth.isAuth }
}

export default connect(mapStateToProps, {LogInAC})(Login)


