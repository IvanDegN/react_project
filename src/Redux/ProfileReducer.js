const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const ProfileReducer = (state, action) =>
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
