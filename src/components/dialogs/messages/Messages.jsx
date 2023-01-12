import item from './../Dialogs.module.css';


const MessageItem = (props) => {
  return <div className={item.message}>{props.message}</div>
}

export default MessageItem;