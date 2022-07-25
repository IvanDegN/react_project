
import User from "./User/User";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
        <div>
            <User/>
            <MyPosts  post={props.profilePage.post} id={props.profilePage.id} addPost={props.addPost} NewPostText={props.profilePage.NewPostText} UpdateNewPostText={props.UpdateNewPostText} />
        </div>
    );
}

export default Profile;