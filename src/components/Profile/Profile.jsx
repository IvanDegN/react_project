
import User from "./User/User";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
        <div>
            <User/>
            <MyPosts  post={props.profilePage.post}
                      id={props.profilePage.id}
                      dispatch={props.dispatch}
                      NewPostText={props.NewPostText}/>
        </div>
    );
}

export default Profile;