import style from './Messages.module.css'

const Messages = () =>
{
    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItems}>
                <div className={`${style.dialog} ${style.active}`}>
                    Ivan
                </div>
                <div className={style.dialog}>
                    Sveta
                </div>
                <div className={style.dialog}>
                    Andrew
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How are you?</div>
                <div className={style.message}>It looks strange</div>
            </div>
        </div>
    );
}

export default Messages;