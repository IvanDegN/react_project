import style from './Messages.module.css'
import Dialog from "../Dialog/Dialog";
import Message from "../Dialog/Message/Message";

const Messages = (props) =>
{



    let DialogItem = props.dialogInfo.map(element => <Dialog name={element.name} id={element.id} key={element.id} />)
    let MessageItem = props.messages.map(element => <Message message={element.message} id={element.id} key={element.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {DialogItem}
            </div>
            <div className={style.messages}>
                {MessageItem}
            </div>
        </div>
    );
}

export default Messages;