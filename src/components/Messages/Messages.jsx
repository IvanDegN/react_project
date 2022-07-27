import style from './Messages.module.css'
import Dialog from "../Dialog/Dialog";
import Message from "../Dialog/Message/Message";
import React from "react";

const Messages = (props) =>
{

    let ref = React.createRef();
    let AddMessage = () =>
    {
        let text = ref.current.value;
        props.addMessage(text);
    }

    let UpdateNewMessageText = () =>
    {
        let text = ref.current.value;
        props.UpdateNewMessageText(text);
    }

    let DialogItem = props.messagesPage.dialogInfo.map(element => <Dialog name={element.name} id={element.id} key={element.id} />)
    let MessageItem = props.messagesPage.messages.map(element => <Message message={element.message} id={element.id} key={element.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {DialogItem}
                <div className={style.wrapperMessage}>
                    <textarea ref={ref} onChange={UpdateNewMessageText} value={props.NewMessageText}></textarea>
                    <div><button onClick={AddMessage} >Add message</button></div>
                </div>
            </div>
            <div className={style.messages}>
                {MessageItem}
            </div>
        </div>
    );
}

export default Messages;