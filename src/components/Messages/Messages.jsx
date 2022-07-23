import style from './Messages.module.css'
import Dialog from "../Dialog/Dialog";
import Message from "../Dialog/Message/Message";

const Messages = () =>
{

    let data =
        [
            {id:1, name: 'Ivan'},
            {id:2, name: 'Sveta'},
            {id:3, name: 'Valera'},
            {id:4, name: 'Peter'},
            {id:5, name: 'Sonya'}
        ]

    let messages =
        [
            {id:1, message: 'Hi'},
            {id:2, message: 'How are you?'},
            {id:3, message: 'I seem it looks strange'},
            {id:4, message: 'He has a cat'},
            {id:5, message: 'She has a car'},
        ]

    let DialogItem = data.map(element => <Dialog name={element.name} id={element.id} />)
    let MessageItem = messages.map(element => <Message message={element.message} id={element.id}/>)

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