import React from 'react';
import s from './Controls.module.css'

// export const Textarea = (props) => {
//    const hasError = props.meta.toched && props.meta.error
//    return (
//       <div className={s.formControl+ '' +(hasError ? s.error : '')}>
//          <textarea {...props} />
//          {hasError && <span>{props.meta.error}</span>}
//       </div>
//    )
// }

// export const Textarea = ({ input, meta, ...props }) => {
//    const hasError = meta.toched && meta.error
//    return (
//       <div className={s.formControl + '' + (hasError ? s.error : '')}>
//          <textarea {...input}{...props} />
//          {hasError && <span>{meta.error}</span>}
//       </div>
//    )
// }
// export const Textarea = (props) => {
//    const hasError = props.meta.toched && props.meta.error
//    return (
//       <div className={s.formControl+ '' +(hasError ? s.error : '')}>
//          <textarea {...props} />
//          {hasError && <span>{props.meta.error}</span>}
//       </div>
//    )
// }

export const Textarea = (props) => {
   return (
      <div >
         <textarea {...props} className={s.error} />
         <span>Hello</span>
      </div>
   )
}