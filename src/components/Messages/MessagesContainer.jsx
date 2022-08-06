import Messages from "./Messages";
import {AddMessageAC, UpdateNewMessageTextAC} from "../../Redux/MessagesReducer";

const MessagesContainer = (props) =>
{

    let AddMessage = () =>
    {
        props.dispatch(AddMessageAC());
    }

    let UpdateNewMessageText = (NewMessageText) =>
    {
        props.dispatch(UpdateNewMessageTextAC(NewMessageText));
    }

    return (<Messages AddMessage={AddMessage}
                      UpdateNewMessageText={UpdateNewMessageText}
                      dialogInfo={props.dialogInfo}
                      messages={props.messages}
                      NewMessageText={props.NewMessageText}/>)

}

export default MessagesContainer;

