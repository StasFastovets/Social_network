import { React } from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './login.module.css'


const LoginForm = (props) => {       
   return (
      <form className={s.form} onSubmit={props.handleSubmit}>
         <div className={s.login}>
            <Field component={'input'} name={'login'} placeholder='login' type={'text'} />
         </div>
         <div className={s.password}>
            <Field component={'input'} name={'password'} placeholder='password' type={'password'} />
         </div>
         <div className={s.remember}>
            <Field component={'input'} name={'remember'} type={'checkbox'} />
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
      console.log(formData)
   }
   return (
      <div className={s.login}>
         <h1 className={s.caption}>Login</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   )
}

export default Login