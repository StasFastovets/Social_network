import item from './Dialogs.module.css';
import PersonItem from './persons/Persons';
import MessageItem from './messages/Messages';
import React from 'react';
import { Field, reduxForm } from 'redux-form';


const DialogsForm = (props) => {
   return (
      <form className={item.form} onSubmit={props.handleSubmit}>
         <Field className={item.text_area} component='input' placeholder='Enter your message' name='message' type='textarea' />
         <button className={item.button}>View message</button>
      </form>
   )
}

const DialogsReduxForm = reduxForm({ form: 'dialogs' })(DialogsForm)

const Dialogs = (props) => {
   let personDataView = props.dialogs.persons.map(item => <PersonItem name={item.name} id={item.id} />)
   let messageDataView = props.dialogs.messages.map(item => <MessageItem message={item.message} id={item.id} />)

   const onSubmit = (formData) => {
      props.viewMessage(formData.message);
   }

   return (
      <div className={item.dialog}>
         <div className={item.persons}>
            {personDataView}
         </div>
         <div className={item.messages}>
            <div>
               {messageDataView}
            </div>
            <DialogsReduxForm onSubmit={onSubmit} />
         </div>
      </div>
   )
}

export default Dialogs;