
import User from "./User/User";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <User/>
            <MyPostsContainer  post={props.state.profilePage.post}
                      id={props.state.profilePage.id}
                      dispatch={props.dispatch}
                      NewPostText={props.state.profilePage.NewPostText}
                        state={props.state}
            />
        </div>
    );
}

export default Profile;