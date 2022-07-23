import style from './Messages.module.css'
import Dialog from "../Dialog/Dialog";
import Message from "../Dialog/Message/Message";

const Messages = () =>
{
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <Dialog name={'Sveta'} url={'messages/1'}/>
                <Dialog name={'Ivan'} url={'messages/2'}/>
                <Dialog name={'Valera'} url={'messages/3'}/>
            </div>
            <div className={style.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'I seem it looks strange'}/>
            </div>
        </div>
    );
}

export default Messages;