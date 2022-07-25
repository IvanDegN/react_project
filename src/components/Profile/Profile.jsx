
import User from "./User/User";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div>
            <User/>
            <MyPosts  post={props.state.post} id={props.state.id} addPost={props.addPost} />
        </div>
    );
}

export default Profile;