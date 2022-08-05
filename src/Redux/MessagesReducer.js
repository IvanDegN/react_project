const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
        dialogInfo:
            [
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Valera'},
                {id: 4, name: 'Peter'},
                {id: 5, name: 'Sonya'}
            ],
        messages:
            [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'I seem it looks strange'},
                {id: 4, message: 'He has a cat'},
                {id: 5, message: 'She has a car'},
            ],
        NewMessageText: 'Message'
    }

export const MessagesReducer = (state = initialState, action) =>
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