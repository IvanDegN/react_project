import style from './Messages.module.css'
import Dialog from "../Dialog/Dialog";
import Message from "../Dialog/Message/Message";
import React from "react";

const Messages = (props) =>
{



    let DialogItem = props.state.dialogInfo.map(element => <Dialog name={element.name} id={element.id} key={element.id} />)
    let MessageItem = props.state.messages.map(element => <Message message={element.message} id={element.id} key={element.id}/>)
    let ref = React.createRef();
    let AddMessage = () =>
    {
        let text = ref.current.value;
        alert(text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {DialogItem}
                <div className={style.wrapperMessage}>
                    <textarea ref={ref}></textarea>
                    <div><button onClick={AddMessage}>Add message</button></div>
                </div>

            </div>
            <div className={style.messages}>
                {MessageItem}

            </div>

        </div>
    );
}

export default Messages;