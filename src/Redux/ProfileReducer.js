const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        post:
            [
                {id: 1, text: 'Hi', likesCount: 10},
                {id: 2, text: 'How are you?', likesCount: 10},
                {id: 3, text: 'She has a dog', likesCount: 10},
                {id: 4, text: 'He always does his work in time', likesCount: 10},
                {id: 5, text: 'She watches TV', likesCount: 10}
            ],
        NewPostText: 'Post text'
    }

export const ProfileReducer = (state = initialState, action) =>
{


    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 6, text: state.NewPostText, likesCount: 30};
            state.post.push(newPost);
            state.NewPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.NewPostText = action.NewPostText;
            break;
        default: return state;
    }

    return state;
}
export const UpdateNewPostTextAC = (NewPostText) => ({type: UPDATE_NEW_POST_TEXT, NewPostText });
export const addPostAC = () => ({ type: ADD_POST});
