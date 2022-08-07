import Messages from "./Messages";
import {AddMessageAC, UpdateNewMessageTextAC} from "../../Redux/MessagesReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) =>
{
    return {
        dialogInfo: state.messagesPage.dialogInfo,
        messages: state.messagesPage.messages,
        NewMessageText: state.messagesPage.NewMessageText
    }
}

let mapDispatchToProps = (dispatch) =>
{
    return {
        AddMessage: () => {dispatch(AddMessageAC());},
        UpdateNewMessageText: (NewMessageText) => {dispatch(UpdateNewMessageTextAC(NewMessageText));}
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;

