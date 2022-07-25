import {rerender} from "../render";

let state =
    {

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
                    ]
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


    }

export let addPost = (postMessage) =>
{
    let newPost = {id:6, text: postMessage, likesCount: 30}
    state.profilePage.post.push(newPost);
    rerender(state)

}

export default state;