
import User from "./User/User";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
        <div>
            <User/>
            <MyPosts  post={props.state.profilePage.post}
                      id={props.state.profilePage.id}
                      dispatch={props.dispatch}
                      NewPostText={props.state.profilePage.NewPostText}
                        state={props.state}
            />
        </div>
    );
}

export default Profile;