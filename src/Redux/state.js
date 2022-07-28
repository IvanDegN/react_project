const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
let store = {
    _state:  {

        messagesPage:
            {
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
            },

        profilePage:
            {
                post:
                    [
                        {id: 1, text: 'Hi', likesCount: 10},
                        {id: 2, text: 'How are you?', likesCount: 10},
                        {id: 3, text: 'She has a dog', likesCount: 10},
                        {id: 4, text: 'He always does his work in time', likesCount: 10},
                        {id: 5, text: 'She watches TV', likesCount: 10}
                    ],
                NewPostText: 'Post text'
            },
        NavBar:
            {
                friends:
                    [
                        {id: 1, name: 'Ivan', url: 'friends/01'},
                        {id: 2, name: 'Alex', url: 'friends/02'},
                        {id: 3, name: 'Peter', url: 'friends/03'},
                    ]
            }


    },
    getState()
    {
        return this._state;
    },
    _callSubscriber()
    {
        console.log('state change')
    },
    _addPost()
    {
        debugger;
        let newPost = {id:6, text: this._state.profilePage.NewPostText, likesCount: 30};
        this._state.profilePage.post.push(newPost);
        this._state.profilePage.NewPostText = '';
        this._callSubscriber(this._state);

    },
    _addMessage()
    {

        let newMessage = {id: 6, message: this._state.messagesPage.NewMessageText};
        let newUser = {id: 6, name: 'Ivan'};
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.dialogInfo.push(newUser);
        this._state.messagesPage.NewMessageText = '';
        this._callSubscriber(this._state);

    },
    _UpdateNewPostText(Text)
    {

        this._state.profilePage.NewPostText = Text;
        this._callSubscriber(this._state);
    },
    _UpdateNewMessageText(Text)
    {
        this._state.messagesPage.NewMessageText = Text;
        this._callSubscriber(this._state);
    },
    subscribe(observer)
    {
        this._callSubscriber = observer;
    },
    dispatch(action)
    {
        if(action.type === ADD_POST)
        {
            this._addPost();

        }

        if(action.type === ADD_MESSAGE)
        {
            this._addMessage();
        }

        if(action.type === UPDATE_MESSAGE_TEXT)
        {
            this._UpdateNewMessageText(action.NewMessageText);
        }

        if(action.type === UPDATE_NEW_POST_TEXT)
        {
            this._UpdateNewPostText(action.NewPostText);
        }

    }

}
    window.store = store;

export default store;