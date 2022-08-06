import MyPosts from "./MyPosts";
import {addPostAC, UpdateNewPostTextAC} from "../../../Redux/ProfileReducer";

const MyPostsContainer = (props) =>
{

    let addPost = () =>
    {
        props.dispatch(addPostAC());
    }
    let UpdateNewPostText = (NewPostText) =>
    {
        props.dispatch(UpdateNewPostTextAC(NewPostText));
    }

    return (<MyPosts addPost={addPost}
                     UpdateNewPostText={UpdateNewPostText}
                     post={props.post}
                     NewPostText={props.NewPostText}/>)
}

export default MyPostsContainer;