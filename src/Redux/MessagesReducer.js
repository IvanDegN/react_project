const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const MessagesReducer = (state, action) =>
{

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 6, message: state.NewMessageText};
            let newUser = {id: 6, name: 'Ivan'};
            state.messages.push(newMessage);
            state.dialogInfo.push(newUser);
            state.NewMessageText = '';
            break;
        case UPDATE_MESSAGE_TEXT:
            state.NewMessageText = action.NewMessageText;
            break;
        default: return state;
    }

    return state;
}

export const AddMessageAC = () => ({type: ADD_MESSAGE});
export const UpdateNewMessageTextAC = (NewMessageText) => ({type: UPDATE_MESSAGE_TEXT, NewMessageText});