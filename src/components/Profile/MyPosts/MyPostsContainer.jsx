import MyPosts from "./MyPosts";
import {addPostAC, UpdateNewPostTextAC} from "../../../Redux/ProfileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) =>
{
    return {
        post: state.profilePage.post,
        NewPostText: state.profilePage.NewPostText
    }
}

let mapDispatchToProps = (dispatch) =>
{
    return {
        addPost: () => {dispatch(addPostAC());},
        UpdateNewPostText: (NewPostText) => {dispatch(UpdateNewPostTextAC(NewPostText));}
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;