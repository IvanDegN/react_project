
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
    addPost()
    {
        let newPost = {id:6, text: this._state.profilePage.NewPostText, likesCount: 30};
        this._state.profilePage.post.push(newPost);
        this.UpdateNewPostText('');
        this._callSubscriber(this._state);
    },
    addMessage()
    {
        let newMessage = {id: 6, message: this._state.messagesPage.NewMessageText};
        let newUser = {id: 6, name: 'Ivan'};
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.dialogInfo.push(newUser);
        this.UpdateNewMessageText('');
        this._callSubscriber(this._state);
    },
    UpdateNewPostText(NewText)
    {
        this._state.profilePage.NewPostText = NewText;
        this._callSubscriber(this._state);
    },
    UpdateNewMessageText(NewText)
    {
        this._state.messagesPage.NewMessageText = NewText;
        this._callSubscriber(this._state);
    },
    subscribe(observer)
    {
        this._callSubscriber = observer;
    }
}
    window.store = store;

export default store;